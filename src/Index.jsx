import React from "react";
import { Keyboard, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MainNavigator from "./navigators/MainNavigator";
import { Provider } from 'react-redux'
import { useFonts, Comfortaa_700Bold, Comfortaa_300Light, Comfortaa_400Regular, Comfortaa_600SemiBold, Comfortaa_500Medium } from '@expo-google-fonts/comfortaa';
import * as SplashScreen from 'expo-splash-screen';
import { store, storePersisted } from './store'
import { init } from './db'
import { PersistGate } from 'redux-persist/integration/react'

init().then(
  () => {
    // console.log('Initialized database');
  }
).catch(err => {
  console.log('Initializing db failed.');
  console.log(err);
});

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
    <Provider store={store}>
      <PersistGate loading={null} persistor={storePersisted}>

        <SafeAreaView style={styles.safeAreaContainer}>
          <TouchableWithoutFeedback
            onPress={() => {
              Keyboard.dismiss();
            }}
          >
            <MainNavigator />
          </TouchableWithoutFeedback>
        </SafeAreaView>

      </PersistGate>
    </Provider>
  );
};

export default Index;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1
  }
});
