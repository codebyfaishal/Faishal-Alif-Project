import 'react-native-gesture-handler';
import  React from 'react';
import { Text, View, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider } from 'native-base';

import Category from './Components/Category';

const Stack = createStackNavigator();







export default function App() {
  return (
    <NativeBaseProvider>
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name=" " component={Category} />
    </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#397af8',
    marginBottom: 20,
    width: '100%',
    paddingVertical: 15,
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  subheaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  });