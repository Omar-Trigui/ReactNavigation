

import React, {Fragment} from 'react';
import {Platform, StyleSheet, Text, View, YellowBox} from 'react-native';



import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeActivity from './components/HomeActivity';
import ProfileActivity from './components/ProfileActivity';


  const Router = createStackNavigator({
    Login : HomeActivity,
    
    Register : ProfileActivity ,
    
    
   
 }, {headerMode: 'none'});
 const Root = createAppContainer(Router);

  export default class App extends React.Component {
    render() {
      return <Root />;
    }
  }



