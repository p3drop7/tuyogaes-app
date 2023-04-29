import { KeyboardAvoidingView, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../store/actions/auth.actions";
import FONTS from "../constants/Fonts";
import COLORS from "../constants/Colors";
import ShadowBox from "../wrappers/ShadowBox";

const RegisterScreen = ({navigation}) => {

    const dispatch = useDispatch()

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const onHandleRegister =()=>{
      dispatch( signUp(email, password) )
    }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.mainContainer}>
      <ShadowBox style={styles.container}>
        <Image
          source={require("../../assets/images/anahata.png")}
          style={styles.image}
        />
        <Text style={styles.title}>TuYoga.es</Text>
        <Text style={styles.title2}>REGÍSTRATE</Text>

        <View style={styles.formContainer}>
          <Text style={styles.formText}>Email</Text>
          <TextInput
            style={styles.formInput}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.formText}>Contraseña</Text>
          <TextInput
            style={styles.formInput}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
          />

          <TouchableOpacity
            onPress={onHandleRegister}
            style={styles.registerButton}
          >
            <Text style={styles.registerButtonText}>Registrarme</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signInContainer}>
          <Text style={styles.signInText}>¿Ya tienes una cuenta?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LogIn");
            }}
          >
            <Text style={styles.signInButton}>Inciar sesión</Text>
          </TouchableOpacity>
        </View>
      </ShadowBox>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  mainContainer: {
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.lightGreen
  },

  container: {
    width: '90%',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.darkGreen,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    borderRadius: 20
  },

  title: {
    color: COLORS.lightGreen,
    fontFamily: FONTS.comfortaaBold,
    fontSize: 23,
  },

  title2: {
    fontFamily: FONTS.comfortaaBold,
    fontSize: 20,
    color: 'white'
  },

  image: {
    height: 40,
    aspectRatio: 1 / 1,
  },

  formContainer: {
    width: '90%',
    height: 190,
    marginVertical: 10,
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },

  formInput: {
    width: '100%',
    height: 40,
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.lightGreen
  },

  formText: {
    fontFamily: FONTS.comfortaaBold,
    color: 'white'
  },

  registerButton: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 5,
    backgroundColor: COLORS.lightGreen,
    borderRadius: 20
  },

  registerButtonText: {
    fontFamily: FONTS.comfortaaSemiBold,
    fontSize: 18,
    textAlign: 'center',
    color: COLORS.darkGreen
  },

  signInContainer: {
    width: '90%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },

  signInText: {
    fontFamily: FONTS.comfortaaLight,
    fontSize: 16
  },

  signInButton: {
    paddingVertical: 6,
    fontFamily: FONTS.comfortaaBold,
    fontSize: 17,
    color: COLORS.lightGreen
  }
});
