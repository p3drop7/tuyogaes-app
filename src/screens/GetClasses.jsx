import { StyleSheet, View, Dimensions } from 'react-native'
import React from 'react'
import ProfileDisplay from '../components/ProfileDisplay/ProfileDisplay'

const GetClasses = () => {
  return (
    <View style={styles.screen}>
      <ProfileDisplay />

      {/* <ProfileDisplay />
      <ClassCounter />
      <AvailableClasses /> */}
    </View>
  )
}

export default GetClasses

const styles = StyleSheet.create({
  screen: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  }
})