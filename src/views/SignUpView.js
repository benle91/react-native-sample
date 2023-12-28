import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView } from 'react-native';
import { styles, buttonBackgroundStyle, buttonTextStyle} from '../components/Styles';
import { SvgXml, err } from 'react-native-svg';
import SvgXML from '../../assets/svg';
import { TouchableOpacity } from 'react-native';
import { signInService } from '../modules/api/services/auth';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { saveToken } from '../utils/AsyncStorageHelper';


const SignUpView = ({ route, navigation }) => {

  const [isValidated, setValidated] = useState(false)
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  useEffect(() => {
    setValidated((email && password) ? true : false)
  }, [email, password])

  const handleInputEmailField = (inputText) => {
    setEmail(inputText);
  };

  const handleInputPasswordField = (inputText) => {
    setPassword(inputText);
  };

  const handlePress = () => {
    // Handle button press
    console.log('Button pressed!');
    navigation.navigate('Home', {
      itemId: 86
    })
  };


  const eventSignUp = () => {
    console.log("click")
    signInService('hienle+1@freec.asia','T@isee05062023').then(async response => {
      // const isExists = response.data.data.exists
      // if (isExists) {
      //   console.log("OKAY")
      // } else {
      //   console.log("NOT OKAY")
      // }
      console.log("response")
      console.log(response.data.data.token)
      await saveToken(response.data.data.token)
      navigation.navigate("Counter")
    }).catch(error => {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.log('Server responded with an error status:', error.response.status);
        console.log('Error data:', error.response.data);
        //console.log('Error data:', error.response.data.data.message);
      } else if (error.request) {
        // The request was made but no response was received
        console.log('TIME OUT', error.request);
      } else {
        // Something happened in setting up the request that triggered an error
        console.log('Error during request setup:', error.message);
      }
    })
  }

  const insets = useSafeAreaInsets()

  return (
    <View style={styles.container}>
      <View style={[styles.container.appBarCenterBottom, {
        paddingTop: insets.top,
        paddingBottom: 16
      }]}>
        <Text style={styles.h1}>1分で完了!</Text>
        <Text style={styles.h1}>この物件にお問い合わせ</Text>
      </View>
      <View style={styles.container.body}>
        <View style={{ paddingHorizontal: 16, paddingBottom: 8 }}>
          <TextInput
            style={styles.inputField}
            placeholder="お名前(例: 田中 太郎)"
            onChangeText={handleInputEmailField}
            keyboardType="email-address"
            multiline={false}
          />
          <TextInput
            style={styles.inputField}
            placeholder="メールアドレス (例: suumo@xxxxxx.jp)"
            secureTextEntry={true}
            onChange={handleInputPasswordField}
          />
          <TextInput
            style={styles.inputField}
            placeholder="電話番号(例:09012345678)"
          />
          <TextInput
            style={styles.inputField}
            placeholder="その他のご要望"
          />
        </View>
        <TouchableOpacity disabled={!isValidated} style={[buttonBackgroundStyle(isValidated), {
          margin: 16
        }]} onPress={handlePress}>
          <Text style={buttonTextStyle(isValidated)}>確認画面へ進む</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SignUpView;