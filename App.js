import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.screen.appBar}>
        <Text style={styles.h1.center}> APLKKSA!!</Text>
      </View>
      <View style={styles.screen.container.row}>
        <View style={[styles.screen.container.box, {backgroundColor: "powderblue"}]} />
        <View style={[styles.screen.container.box, {backgroundColor: "skyblue"}]} />
        <View style={[styles.screen.container.box, {backgroundColor: "steelblue"}]} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  screen: {
    flex: 1, // same with weight
    backgroundColor: '#fff',
    appBar: {
      borderColor: "pink",
      backgroundColor: "yellow",
      height: 56,
      justifyContent: "center",
      marginTop: 36,
      borderBottomWidth: 1,
    },
    container: {
      flex: 1,
      row: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
      },
      box: {
        width: 50,
        height: 50,
      },
      backgroundBlack: {
        flex: 1,
        backgroundColor: "gray"
      },
      backgroundRed: {
        flex: 2,
        backgroundColor: "red"
      },
    }
  },
  appBarTitle: {
    color: "#000",
    fontSize: 20
  },
  h1: {
    fontSize: 22,
    color: "#000",
    center: {
      alignItems: "center",
    }
  }
});
