import { Keyboard, StyleSheet, TouchableWithoutFeedback } from "react-native";
import React from "react";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Comfortaa_700Bold, Comfortaa_300Light, Comfortaa_400Regular, Comfortaa_600SemiBold, Comfortaa_500Medium } from '@expo-google-fonts/comfortaa';
import MainNavigator from "./navigators/MainNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
import MyClassesContextProvider from "./context/MyClassesContext";
import ClassesContextProvider from "./context/ClassesContext";

SplashScreen.preventAutoHideAsync();

const Index = () => {
  const [fontsLoaded] = useFonts({
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
  });

  React.useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >

        <ClassesContextProvider>
          <MyClassesContextProvider>
            <MainNavigator />
          </MyClassesContextProvider>
        </ClassesContextProvider>
        
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
