import { axiosInstance } from "../ApiClient"

export const checkEmailExistService = (sEmail) => {
    return axiosInstance.get('api/check-email', {
        params: {
            email: sEmail
        }
    })
}

export const signUpService = (sEmail) => {
    return axiosInstance.get('api/auth/register', {
        params: {
            email: sEmail
        }
    })
}

export const signInService = (sEmail, sPassword) => {
    return axiosInstance.post('api/auth/login', {
        email: sEmail,
        password: sPassword
    })
}


