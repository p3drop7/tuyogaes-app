import React from 'react'
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './TabNavigator';
import AuthNavigator from './AuthNavigator';

const MainNavigator = () => {

  const isAuth = useSelector( state => state.auth.userId )
  
  return (
    <NavigationContainer>
      { isAuth ? <TabNavigator /> : <AuthNavigator/> }
    </NavigationContainer>
  );
}

export default MainNavigator