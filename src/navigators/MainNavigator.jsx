import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import TabNavigator from './TabNavigator';
import AuthNavigator from './AuthNavigator';
import { useSelector } from 'react-redux';

const MainNavigator = () => {

  const isAuth = useSelector( state => state.auth.userId )
  // const userID = useSelector( state => state.profile.userID )

  // React.useEffect(() => {
  //   if(userID){

  //   }
  // })
  
  return (
    <NavigationContainer>
      { isAuth ? <TabNavigator /> : <AuthNavigator/> }
    </NavigationContainer>
  );
}

export default MainNavigator