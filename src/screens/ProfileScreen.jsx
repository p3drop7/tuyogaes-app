import React from 'react'
import { StyleSheet, Text, View, Image, Pressable, Alert } from 'react-native'
import { Feather } from '@expo/vector-icons';
import FONTS from '../constants/Fonts';
import * as ImagePicker from 'expo-image-picker'
import { useDispatch, useSelector } from 'react-redux';
import { loadImage, takeImage } from '../store/actions/auth.actions'


const ProfileScreen = () => {

    const dispatch = useDispatch()

    const profileImage = useSelector(state => state.auth.profileImage)

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

  return (
    <View style={styles.container}>
      <Text style={styles.profileTitle}>Mi Perfil</Text>

      <View style={styles.profileContainer}>
        <Text style={styles.profileText}>NAME</Text>
        <Text style={styles.profileText}>EMAIL@EMAIL.COM</Text>

        <Pressable
          style={styles.profileImageContainer}
          onPress={() => {
            takeImageHandler();
          }}
        >
          {profileImage === null ? (
            <Image
              source={require("../../assets/images/user.png")}
              style={styles.image}
            />
          ) : (
            <Image 
                source={{ uri: profileImage }} 
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

    profileText: {
        fontFamily: FONTS.comfortaaSemiBold,
        fontSize: 15,
        marginVertical: 5
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