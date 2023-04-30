import { StyleSheet, Text, View, KeyboardAvoidingView, Image, Dimensions, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import ShadowBox from '../wrappers/ShadowBox';
import COLORS from '../constants/Colors';
import FONTS from '../constants/Fonts';
import { useDispatch } from 'react-redux';
import { logIn } from '../store/actions/auth.actions';

const LogInScreen = ({navigation}) => {

    const dispatch = useDispatch()

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const onHandleLogIn =()=>{
      dispatch( logIn( email, password ))
    }
    
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.mainContainer}>
      <ShadowBox style={styles.container}>

        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.image}
        />
        <Text style={styles.title}>TuYoga.es</Text>

        <View style={styles.formContainer}>
          <Text style={styles.formText}>Email</Text>
          <TextInput
            style={styles.formInput} 
            onChangeText={setEmail}
            keyboardType='email-address'
            autoCapitalize='none'
            cursorColor={COLORS.darkGreen}
          />
          
          <Text style={styles.formText}>Contraseña</Text>
          <TextInput
            style={styles.formInput}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
            cursorColor={COLORS.darkGreen}
          />

          <TouchableOpacity 
            onPress={onHandleLogIn} 
            style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Inciar sesión</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.goBackContainer}>
          <Text style={styles.goBackText}>¿Aún no te has registrado?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            <Text style={styles.goBackButton}>Registrarme</Text>
          </TouchableOpacity>
        </View>
      </ShadowBox>
    </KeyboardAvoidingView>
  );
}

export default LogInScreen

const styles = StyleSheet.create({
  mainContainer: {
    height: Dimensions.get("window").height,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.darkGreen,
  },

  container: {
    width: "90%",
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.lightGreen,
  },

  image: {
    height: 50,
    aspectRatio: 1 / 1,
  },

  title: {
    color: COLORS.darkGreen,
    fontFamily: FONTS.comfortaaBold,
    fontSize: 23,
  },

  formContainer: {
    width: "90%",
    height: 190,
    marginVertical: 10,
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },

  formInput: {
    width: "100%",
    height: 40,
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.darkGreen,
    fontFamily: FONTS.comfortaaSemiBold,
    fontSize: 15
  },

  formText: {
    fontFamily: FONTS.comfortaaBold,
    color: COLORS.darkGreen
  },

  registerButton: {
    width: "100%",
    marginVertical: 10,
    paddingVertical: 5,
    backgroundColor: COLORS.darkGreen,
    borderRadius: 20,
  },

  registerButtonText: {
    color: "white",
    fontFamily: FONTS.comfortaaSemiBold,
    fontSize: 18,
    textAlign: "center",
  },

  goBackContainer: {
    alignItems: "center",
  },

  goBackText: {
    fontFamily: FONTS.comfortaaLight,
    fontSize: 16,
    color: COLORS.darkGray
  },

  goBackButton: {
    fontSize: 16,
    fontFamily: FONTS.comfortaaBold,
    paddingTop: 10,
    color: COLORS.darkGreen
  },
});