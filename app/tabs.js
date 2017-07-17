import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Home from "./home";
import Camera from "./camera";
import Gallery from "./gallery";
import Icon from 'react-native-vector-icons/FontAwesome';

export const Tabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: () => <Icon name="home" size={30} />,
    },
  },
  Camera: {
    screen: Camera,
    navigationOptions: {
      tabBarLabel: 'Camera',
      tabBarIcon: () => <Icon name="camera" size={24} />,
    },
  },
  Gallery: {
    screen: Gallery,
    navigationOptions: {
      tabBarLabel: 'Gallery',
      tabBarIcon: () => <Icon name="picture-o" size={24} />,
    },
  }
});
