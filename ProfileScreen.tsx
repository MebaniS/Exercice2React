import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
    HomeScreen: undefined;
    ProfileScreen: undefined;
};


const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Button title="Aller au profil" />
    </View>
  );
};

export default HomeScreen;
