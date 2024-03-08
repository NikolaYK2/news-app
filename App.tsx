import {StyleSheet, Text, View} from 'react-native';
import {useEffect, useState} from "react";
import {globalStyle} from "@/assets/style/globalStyle";
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

const getFonts = () => Font.loadAsync({
  'popsMedium': require('@/assets/fonts/Poppins-Medium.ttf'),
  'popsRegular': require('@/assets/fonts/Poppins-Regular.ttf'),
})


export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)//подключены ли шрифты

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();

    getFonts()
      .then(() => setFontLoaded(true))
      .catch(console.warn)
      .finally(() => SplashScreen.hideAsync())
  }, []);

  if (!fontLoaded) {
    return null
  }

  return (
    <View style={globalStyle.main}>
      <Text>Hello!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // text:{
  //   backgroundColor:'red'
  // }
});
