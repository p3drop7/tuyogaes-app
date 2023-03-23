import React from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import ProfileDisplay from '../components/ProfileDisplay/ProfileDisplay'
import MyClasses from '../components/MyClasses/Index'

const DashboardScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <ProfileDisplay />
      <ScrollView>
        <MyClasses navigation={navigation} />
      </ScrollView>
    </View>
  );
}

export default DashboardScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  }
})