import { StyleSheet, View, Dimensions } from 'react-native'
import React from 'react'
import ProfileDisplay from '../components/ProfileDisplay/ProfileDisplay'
import AvailableClasses from '../components/AvailableClasses/Index'

const GetClasses = () => {
  return (
    <View style={styles.screen}>
      <ProfileDisplay />
      <AvailableClasses />
    </View>
  )
}

export default GetClasses

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  }
})