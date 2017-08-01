import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  PanResponder,
  Animated
} from 'react-native';

export default class PanResponderTest extends Component {

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: (e, gestureState) => {
      },

      onPanResponderMove: Animated.event([
      ]),

      onPanResponderRelease: (e, {vx, vy}) => {
      }
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Animated.View {...this._panResponder.panHandlers}>
          <Image style={styles.image} source={require('../assets/platypus_logo_small.jpg')} />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  image: {
    width: 200,
    height: 200
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('PanResponderTest', () => PanResponderTest);
