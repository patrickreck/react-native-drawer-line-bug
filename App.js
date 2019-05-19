import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from "react-navigation";
import {createDrawerNavigator} from "react-navigation-drawer";


class HomeScreen extends Component {
  render = () => <View style={styles.home}><Text style={styles.homeText}>Drag me --></Text></View>
}

export default createAppContainer(
  createDrawerNavigator({
      HomeScreen: HomeScreen,
    },
    {
      drawerType: 'slide',
      overlayColor: 'transparent',
      style: {backgroundColor: 'purple'},
      edgeWidth: 200,
    },
    {
      initialRouteName: 'HomeScreen',
    })
);

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: 'purple',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignContent: 'center',
  },
  homeText: {
    color: 'white',
    marginLeft: 10,
  }
});
