import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from 'expo-router';  // or use from '@react-navigation/native'

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'white' }}>Welcome to the F-22 AR App!</Text>
      
      {/* Navigate to AR screen */}
      <Button
        title="Start AR Experience"
        onPress={() => navigation.navigate('ar')}  // Programmatically navigate to /ar
      />

      {/* Navigate to Game screen */}
      <Button
        title="Play Game"
        onPress={() => navigation.navigate('game')}  // Programmatically navigate to /game
      />
    </View>
  );
}
