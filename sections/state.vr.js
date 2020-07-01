import React, { Component } from 'react';
import { AppRegistry, asset, Pano, Text, View } from 'react-vr';

export default class Sky extends Component {
  constructor() {
    super();

    this.state = {
      showSign: true
    };
    setInterval(() => this.setState({showSign: !this.state.showSign}), 5000);
  }

  render() {
  let message = this.state.showSign === true ? 'Welcome to VR Land' : ' Feel free to explore!';

    return (
      <View>
           <Pano source={asset('starry-sky.jpg')}></Pano>
           <Text style={{fontSize: 0.1, transform: [{translate: [-1, 0, -2]}]}}>{message}</Text>
         </View>
    );
  }
};

AppRegistry.registerComponent('Sky', () => Sky);
