import { StyleSheet, View, Dimensions } from 'react-native'
import React from 'react'
import ProfileDisplay from '../components/ProfileDisplay/ProfileDisplay'
import DayClasses from '../components/DayClasses/Index'

const DayClassesScreen = ({route, navigation}) => {
  return (
    <View style={styles.screen}>
      <ProfileDisplay />
      <DayClasses navigation={navigation} route={route}/>
    </View>
  )
}

export default DayClassesScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  }
})