import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Button } from 'react-native';
import SvgConstant from '../../../assets/svg';
import { SvgXml } from 'react-native-svg';
import styles from '../../components/Styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Flex } from 'antd';
import { saveToken } from '../../utils/AsyncStorageHelper';
import HomeView from './HomeView';


const AlbumsRoute = () => <Text>Albums</Text>

const MainView = ({navigation}) => {

  const [selectedIcon, setSelectedIcon] = useState('search'); // Initial icon

  const handleIconChange = (newIcon) => {
    setSelectedIcon(newIcon); // Update the selected icon when an event occurs
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          {
            selectedIcon === 'home' ? <HomeView navigation={navigation}/> : <AlbumsRoute />
          }
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, height: 56, backgroundColor: 'blue' }}>
          <TouchableOpacity onPress={() => handleIconChange('home')}>
            <SvgXml xml={SvgConstant.icLeft} width='24' height='24' color={selectedIcon === 'home' ? 'blue' : 'blue'}></SvgXml>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleIconChange('search')}>
            <SvgXml xml={SvgConstant.icLeft} width='24' height='24'></SvgXml>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MainView;
