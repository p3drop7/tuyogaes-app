import { Dimensions, StyleSheet, View } from 'react-native'
import React from 'react'
import ProfileDisplay from '../components/ProfileDisplay/ProfileDisplay'
import MyClasses from '../components/MyClasses/Index'

const Dashboard = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <ProfileDisplay />
      <MyClasses navigation={navigation} />
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  screen: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  }
})