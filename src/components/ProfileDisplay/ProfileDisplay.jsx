import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import COLORS from '../../constants/Colors'
import FONTS from '../../constants/Fonts';

const ProfileDisplay = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={require("../../../assets/images/anahata.png")}
          style={styles.image}
        />
        <View style={styles.nameContainer}>
          <Text style={styles.name}>Pedro</Text>
          <Text style={styles.name}>Palencia</Text>
        </View>
      </View>
      <Image
        source={require("../../../assets/images/user.png")}
        style={styles.userImage}
      />
    </View>
  );
}

export default ProfileDisplay

const styles = StyleSheet.create({
    container: {
        height: '25%',
        marginBottom: 20,
    },

    innerContainer: {
      height: '90%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 30,
      backgroundColor: COLORS.lightGreen,
      borderBottomLeftRadius: 200,
      borderBottomRightRadius: 200
    },

    nameContainer: {
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginLeft: 15,
    },

    image: {
      height: 60,
      width: 60,
    },

    name: {
      fontFamily: FONTS.comfortaaBold,
      fontSize: 25
    },

    userImage: {
      height: 80,
      width: 80,
      backgroundColor: 'white',
      borderWidth: 4,
      borderColor: COLORS.darkGreen,
      borderRadius: 100,
      alignItems: 'center',
      alignSelf: 'center',
      position: 'relative',
      top: -50
    }
})