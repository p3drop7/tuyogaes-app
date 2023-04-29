import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import ProfileDisplay from '../components/ProfileDisplay/ProfileDisplay'
import MonthClasses from '../components/MonthClasses/Index'
import COLORS from '../constants/Colors'

// Screen with a calendar to show days with available classes
// User can select a day to show a list of classes on that day on DayClasses screen
const MonthClassesScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <ProfileDisplay />
      <MonthClasses navigation={navigation}/>
    </View>
  )
}

export default MonthClassesScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    backgroundColor: COLORS.lightGreen
  }
})