import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../store/actions/auth.actions";

const RegisterScreen = () => {

    const dispatch = useDispatch()

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const onHandleRegister =()=>{
        dispatch( signUp(email, password) )
    }

  return (
    <KeyboardAvoidingView behavior="padding">
      <View>
        <Text>REGISTRO</Text>

        <View>
          <Text>Email</Text>
          <TextInput 
            onChangeText={setEmail}
            keyboardType='email-address'
            autoCapitalize='none'
          />
          
          <Text>Contraseña</Text>
          <TextInput 
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
          />

          <TouchableOpacity onPress={onHandleRegister}>
            <Text>Registrarme</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text>¿Ya tienes una cuenta?</Text>
          <TouchableOpacity>
            <Text>Inciar sesión</Text>
          </TouchableOpacity>
        </View>

      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
