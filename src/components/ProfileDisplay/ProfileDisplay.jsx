import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import COLORS from '../../constants/Colors'
import FONTS from '../../constants/Fonts';
import { useDispatch, useSelector } from 'react-redux';
import { saveUserData } from '../../store/actions/auth.actions';

// User's profile display
const ProfileDisplay = () => {

  const userData = useSelector(state => state.auth )
  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.titleContainer}>
          <Image
            source={require("../../../assets/images/logolight.png")}
            style={styles.image}
          />
          <Text style={styles.title}>TuYoga.es</Text>
        </View>

        {
          !userData.userName || userData.userName === 'NONE'
            ? <Text style={styles.noName}>Agrega tu nombre en "Mi Perfil"</Text>
            : <Text style={styles.name}>{userData.userName}</Text>
        }
      </View>

      {userData.profileImage === null ? (
        <Image
          source={require("../../../assets/images/user.png")}
          style={styles.userImage}
        />
      ) : (
        <Image
          source={{ uri: userData.profileImage }}
          style={styles.userImage}
        />
      )}
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
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 30,
      backgroundColor: COLORS.darkGreen,
      borderBottomLeftRadius: 200,
      borderBottomRightRadius: 200,
    },

    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 15,
    },

    title: {
      marginLeft: 10,
      fontFamily: FONTS.comfortaaBold,
      fontSize: Dimensions.get('screen').width * 0.06,
      color: COLORS.lightGreen
    },

    image: {
      width: Dimensions.get('screen').width * 0.1,
      aspectRatio: 1/1
    },

    noName: {
      fontFamily: FONTS.comfortaaLight,
      fontSize: Dimensions.get('screen').width * 0.04,
      color: COLORS.lightGreen
    },

    name: {
      fontFamily: FONTS.comfortaaBold,
      fontSize: Dimensions.get('screen').width * 0.07,
      color: COLORS.lightGreen
    },

    userImage: {
      height: Dimensions.get('screen').width * 0.2,
      aspectRatio: 1/1,
      backgroundColor: 'white',
      borderWidth: 4,
      borderColor: COLORS.darkGreen,
      borderRadius: 100,
      alignItems: 'center',
      alignSelf: 'center',
      position: 'relative',
      top: -37
    }
})