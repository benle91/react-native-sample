import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import styles from './components/Styles';
import { SvgXml } from 'react-native-svg';
import { SvgConstant as SvgXML} from './constants/svg';
import { TouchableOpacity } from 'react-native';

const CheckEmailPage = () => {

  const handlePress = () => {
    // Handle button press
    console.log('Button pressed!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.container.appBar}>
        <TouchableOpacity onPress={handlePress} styles={[{
          padding: 16,
          backgroundColor: "#FFF"
        }]}>
          <SvgXml xml={SvgXML.icLeft} width="24" height="24" />
        </TouchableOpacity>
      </View>
      <View style={styles.container.body}>
      <TextInput
        style={styles.inputField}
        defaultValue="You can type in me"
      />
      </View>
    </View>
  );
}

export default CheckEmailPage;