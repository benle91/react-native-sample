import React from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { clearStorage, saveToken } from '../../utils/AsyncStorageHelper'

const HomeView = ({navigation}) => {
    const logoutEvent = async() => {
        await clearStorage()
        navigation.navigate('SignUp')
    }
    return <SafeAreaView style={{
        alignItems: "center",
        justifyContent: "center"
    }}>
        <Button title='Logout' onPress={logoutEvent}   />
    </SafeAreaView>
}

export default HomeView