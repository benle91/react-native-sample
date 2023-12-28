import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import counterSlice from "../modules/reducers/counter";
import styles from '../components/Styles';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { increment, decrement } from '../modules/reducers/counter';


function CounterPage({route, navigation}) {
  
  useEffect(() => {
    if (route.params?.itemId) {
      console.log(route.params?.itemId)
    }
    return () => {
      console.log("onStop")
    }
  }, [])

  const [itemId, setItemId] = useState(null);

  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  

  const pod2Home = () => {
    
    navigation.navigate('Home', {
      itemId: itemId
    }, true)
  }

  return (
    <View>
      <Text style={{
        color: "black",
        marginTop: 32,
        alignItems: "center",
        fontSize: 24
      }}>Counter: {counter}</Text>
      <TouchableOpacity style={[styles.button, {
        margin: 16
      }]} onPress={() => dispatch(increment())}>
        <Text style={styles.buttonText}>確認画面へ進む</Text>
      </TouchableOpacity>

      <TextInput
              style={styles.inputField}
              placeholder="お名前(例: 田中 太郎)"
              onChangeText={(inputText) => {
                setItemId(inputText)
              }}
            />

      <TouchableOpacity style={[styles.button, {
        margin: 16
      }]} onPress={pod2Home}>
        <Text style={styles.buttonText}>確認画面へ進む</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CounterPage;
