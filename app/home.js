import React, { Component } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Places } from "./places";

export default class Home extends Component {

  renderPlaceItem = ({ item }) => (
    <View style={ styles.itemView }>
      <Image
        source={{ uri: item.image }}
        style={ styles.itemImage }
      />
      <Text style={ styles.itemText }>{ item.name }</Text>
    </View>
  );

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: "#cecece",
        }}
      />
    );
  };

  render() {
    return (
      <View style={ styles.home }>
        <FlatList
          keyExtractor={ (item, index) => index }
          data={ Places }
          renderItem={ this.renderPlaceItem }
          ItemSeparatorComponent={ this.renderSeparator }
        />
      </View>    
    );
  }
}

const styles = StyleSheet.create({
  home: {
    marginTop: 20,
  },
  itemView: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 60
  },
  itemText: {
    padding: 10,
    fontSize: 18,
  },
  itemImage: {
    height: 50,
    width: 50,
    marginLeft: 5
  },
});
