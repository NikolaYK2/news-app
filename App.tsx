import {StyleSheet} from 'react-native';
import {useEffect, useState} from "react";
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Main} from "@/features/2-main/Main";

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
    <SafeAreaProvider>
      <Main/>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  // container: {
  // },
});

