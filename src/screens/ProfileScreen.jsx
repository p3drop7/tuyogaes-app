import React from 'react'
import { StyleSheet, Text, View, Image, Pressable, Alert, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker'
import { useDispatch, useSelector } from 'react-redux';
import { saveName, saveUserData, takeImage } from '../store/actions/auth.actions'
import FONTS from '../constants/Fonts';
import COLORS from '../constants/Colors';

const ProfileScreen = () => {

    const dispatch = useDispatch()

    const userData = useSelector(state => state.auth)

    const [inputCondRender, setInputCondRender] = React.useState(false)
    const [inputUserName, setInputUserName] = React.useState('')

    const verifyPremissions = async ()=>{
        const { status } = await ImagePicker.requestCameraPermissionsAsync()

        if( status !== 'granted') {
            Alert.alert('Permisos insuficientes')
            return false
        }
        return true
    }

    const takeImageHandler = async ()=> {
        const isCamPremissionsOk = await verifyPremissions()
        if (!isCamPremissionsOk) return

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.8
        })

        dispatch( takeImage(image.assets[0].uri) )
    }

    React.useEffect(() => {
      dispatch( saveUserData(userData) )
    }, [userData])
    

  return (
    <View style={styles.container}>
      <Text style={styles.profileTitle}>Mi Perfil</Text>

      <View style={styles.profileContainer}>
        <View style={styles.nameContainer}>
          <Pressable
            style={styles.pressableNameContainer}
            onPress={() => {
              setInputCondRender(true);
            }}
          >
            {inputCondRender === false ? (
              userData.userName === null ? (
                <>
                  <Text style={styles.profileText}>Agrega tu nombre aquí</Text>
                  <Feather style={styles.nameIcon} name="edit-2" size={18} color="black" />
                </>
              ) : (
                <>
                  <Text style={styles.profileText}>Nombre: {userData.userName}</Text>
                  <Feather style={styles.nameIcon} name="edit-2" size={18} color="black" />
                </>
              )
            ) : (
              <View style={styles.textInputContainer}>
                <TextInput
                  style={styles.nameInput}
                  onChangeText={setInputUserName}
                  keyboardType="default"
                  autoCapitalize="words"
                />
                <Pressable
                  style={styles.nameButton}
                  onPress={() => {
                    dispatch(saveName(inputUserName));
                    setInputCondRender(false);
                  }}
                >
                  <Text style={styles.nameButtonText} >Guardar</Text>
                </Pressable>
              </View>
            )}
          </Pressable>
        </View>

        <Text style={styles.profileText}>Email: {userData.userEmail}</Text>

        <Pressable
          style={styles.profileImageContainer}
          onPress={() => {
            takeImageHandler();
          }}
        >
          {userData.profileImage === null ? (
            <Image
              source={require("../../assets/images/user.png")}
              style={styles.image}
            />
          ) : (
            <Image
              source={{ uri: userData.profileImage }}
              style={styles.image}
            />
          )}

          <Feather name="edit-2" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        alignItems: 'center'
    },

    profileTitle: {
        fontFamily: FONTS.comfortaaBold,
        fontSize: 25,
    },

    profileContainer: {
        width: '100%',
        padding: 20,
        alignItems: 'center',
    },

    nameContainer: {
      flexDirection: 'row',
      alignItems: 'center'
    },

    pressableNameContainer: {
      flexDirection: 'row',
      alignItems: 'center'
    },

    profileText: {
        fontFamily: FONTS.comfortaaSemiBold,
        fontSize: 15,
        marginVertical: 5
    },

    nameIcon:{
      marginLeft: 10,
    },

    textInputContainer: {
      flexDirection: 'row',
      alignItems: 'center'
    },

    nameInput: {
      width: 130,
      height: 32,
      marginRight: 10,
      backgroundColor: COLORS.lightGreen,
      borderBottomColor: COLORS.lightGray,
      borderBottomWidth: 2
    },

    nameButton: {
      paddingHorizontal: 12,
      paddingVertical: 8,
      backgroundColor: COLORS.darkGreen,
      borderRadius: 10,
    },

    nameButtonText: {
      fontFamily: FONTS.comfortaaSemiBold,
      color: 'white'
    },

    profileImageContainer: {
        height: '70%',
        width: '100%',
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        height: '90%',
        marginBottom: 10,
        aspectRatio: 1 / 1,
        borderRadius: 500
    }
})