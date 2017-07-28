import React, { Component } from 'react';
import {
  CameraRoll,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from 'react-native';

const { width } = Dimensions.get('window')

export default class Gallery extends Component {

  constructor() {
    super();
    this.getPhotos();
  }

  static navigationOptions = {
    title: 'Camera Roll App???'
  }

  state = {
    photos: []
  }

  getPhotos = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'All'
    })
    .then(r => this.setState({ photos: r.edges }))
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.scrollView}>
        {
          this.state.photos.map((p) => {
            return (
              <Image
                key={ p.node.image.filename }
                style={{ width: width / 3, height: width / 3 }}
                source={{ uri: p.node.image.uri }}
              />
            )
          })
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 20,
    flexWrap: 'wrap',
    flexDirection: 'row'
  }
});
