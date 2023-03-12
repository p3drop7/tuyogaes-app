import { Keyboard, StyleSheet, TouchableWithoutFeedback } from "react-native";
import React from "react";
import * as SplashScreen from 'expo-splash-screen';
import {useFonts, OpenSans_400Regular, OpenSans_700Bold} from '@expo-google-fonts/open-sans';
import MainNavigator from "./navigators/MainNavigator";
import { SafeAreaView } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

const Index = () => {

  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold
  });

  React.useEffect(() =>{
    if(fontsLoaded){
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  if(!fontsLoaded){
    return null;
  }

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <MainNavigator />
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  }
});
