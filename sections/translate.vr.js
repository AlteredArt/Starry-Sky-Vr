import React, { Component } from 'react';
import { AppRegistry, asset, Pano, Text, View, Box } from 'react-vr';


export default class Sky extends Component {

  render() {
    return (
      <View>
           <Pano source={asset('starry-sky.jpg')}></Pano>
            <Box
            dimWidth={0.5}
            dimHeight={0.5}
            dimDepth={0.5}
            wireframe={true}
            style={{
              color: '#d22',
              transform: [
                {translate: [0,0,-3]},
                {translateY: 1},
                {translateX: -1},
                {rotateY: 85},
                {rotateZ: 45},
                ]
              }}
            />
         </View>
    )
  }
};


AppRegistry.registerComponent('Sky', () => Sky);
