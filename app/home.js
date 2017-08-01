import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Places } from "./places";

export default class Home extends Component {
  render() {
    return (
      <View style={styles.home}>
        <FlatList
          keyExtractor={(item, index) => index}
          data={Places}
          renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
        />
      </View>    
    );
  }
}

const styles = StyleSheet.create({
  home: {
    marginTop: 20,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
