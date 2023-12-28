import axios from 'axios';
import { getToken } from '../../utils/AsyncStorageHelper';
import { err } from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const axiosInstance = axios.create({
    baseURL: 'https://api.taisee.freectech.com/',
    timeout: 1000
})

axiosInstance.interceptors.request.use(async config => {
    try {
        const token = await getToken()
        console.log("Token Worked")
        if (token) {
        
            config.headers.Authorization = `Bearer ${token}`
        }
    } catch (errror) {
        console.error('Error retrieving token:', error);
    }
    return config
}, error => {
    console.error('Error retrieving token:', error);
    Promise.reject(error)
})


axiosInstance.interceptors.response.use(
    response => response, 
    async error => {
        const originalRequest = error.config;
    
        // Check if the error is due to an expired access token
        if (error.response && error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
    
          // Get the refresh token from AsyncStorage
          const refreshToken = await AsyncStorage.getItem('refreshToken');
    
          if (refreshToken) {
            try {
              // Use refreshToken to request a new access token
              const response = await axios.post('https://api.example.com/refresh', {
                refreshToken,
              });
    
              const newAccessToken = response.data.accessToken;
    
              // Save the new access token to AsyncStorage
              await AsyncStorage.setItem('accessToken', newAccessToken);
    
              // Retry the original request with the new access token
              originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
              return axiosInstance(originalRequest);
            } catch (refreshError) {
              console.error('Error refreshing token:', refreshError);
              // Handle refresh token request error
            }
          } else {
            // Handle missing refresh token
          }
        }
        console.error('axiosInstance.interceptors.response:', error.request);
        return Promise.reject(error);
      }
    
    )


