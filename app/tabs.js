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

export const Tabs = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
    },
  },
  Camera: {
    screen: Camera,
    navigationOptions: {
      tabBarLabel: 'Camera',
    },
  },
  Gallery: {
    screen: Gallery,
    navigationOptions: {
      tabBarLabel: 'Gallery',
    },
  }
});
