import React from 'react';
// import { View, Text, Button } from 'react-native';
// import { Link } from 'expo-router';  // Use Link for navigation
import { ViroARSceneNavigator, ViroText, ViroARScene } from '@viro-community/react-viro';

const ARScene = () => (
  <ViroARScene>
    <ViroText
      text="Hello AR World!"
      position={[0, 0, -2]}
      style={{ fontSize: 30, color: '#ffffff' }}
    />
  </ViroARScene>
);

export default function ARScreen() {
  return <ViroARSceneNavigator initialScene={{ scene: ARScene }} />;
}

