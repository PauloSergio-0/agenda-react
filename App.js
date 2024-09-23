import { useFonts } from 'expo-font';

import { SafeAreaView, StyleSheet, Text, View, Platform, StatusBar} from 'react-native';

export default function App() {


    /* importando fonts*/
  const [isFontsLoaded] = useFonts({
    'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf'),
  });


    if (!isFontsLoaded){
      return null;
    }

  return (
    <SafeAreaView style={styles.container}>
      <Text style= {{fontFamily:'GeneralSans-400'}}>Open up App.js to start working on your app!</Text>
      <Text style= {{fontFamily:'GeneralSans-600'}}>Open up App.js to start working on your app!</Text>
      <Text style= {{fontFamily:'GeneralSans-700'}}>Open up App.js to start working on your app!</Text>
      <Text style= {{fontFamily:'GeneralSans-700'}}>test</Text>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0,
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },

});
