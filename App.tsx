import 'react-native-gesture-handler';
import  React from 'react';
import { Text, View, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';


import { NavigationContainer, TabActions } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider } from 'native-base';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import HomeScreen from './Components/HomeScreen';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBarPosition="bottom"
      tabBarOptions={{
        style: {
          marginHorizontal: 7,
          paddingBottom: 10,
          shadowOpacity: 0,
          shadowOffset: {
            height: 0,
            width: 0,
          },
          elevation: 0,
          shadowRadius: 0,
          
        },
        indicatorStyle: {
          backgroundColor: 'darkgreen',
          marginBottom: 5,
          width: '5%',
          marginLeft: '10%',
        },
        labelStyle: {
          fontSize: 12,
        },
        activeTintColor: 'darkgreen',
        inactiveTintColor: 'grey'
      }}>
      <Tab.Screen name="Beranda" component={HomeScreen} />
      <Tab.Screen name="Transaksi" component={HomeScreen} />
      <Tab.Screen name="Aktivitas" component={HomeScreen} />
      <Tab.Screen name="Sertifikat" component={HomeScreen} />
      {/* <Tab.Screen name="Items" component={Coupons} /> */}
    </Tab.Navigator>
  );
};





export default function App() {
  return (
    <NativeBaseProvider>
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name=" " component={TabNavigator} />
    </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}

// const styles = StyleSheet.create({
//   headerContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#397af8',
//     marginBottom: 20,
//     width: '100%',
//     paddingVertical: 15,
//   },
//   heading: {
//     color: 'white',
//     fontSize: 22,
//     fontWeight: 'bold',
//   },
//   headerRight: {
//     display: 'flex',
//     flexDirection: 'row',
//     marginTop: 5,
//   },
//   subheaderText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   });