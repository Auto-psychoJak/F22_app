import React from 'react';
import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';  // Use Link for navigation

export default function GameScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'white' }}>Side Scroller Game Coming Soon!</Text>
      <Link href="/(tabs)/">
        <Button title="Back to Home" />
      </Link>
    </View>
  );
}
