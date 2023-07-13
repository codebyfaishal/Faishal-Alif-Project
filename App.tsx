import React from 'react';
import {TailwindProvider} from 'tailwind-rn';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import utilities from './tailwind.json';
import { Index } from './components/Index'
import { Button } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    // <TailwindProvider utilities={utilities}>
    //   <Index />
    // </TailwindProvider>
    // </NavigationContainer>

<NavigationContainer>
<TailwindProvider utilities={utilities}>
<Stack.Navigator>

  <Stack.Screen name=" " component={Index} options={{ 
  headerRight: (props) => ( // App Logo
  <Button
  // onPress={onPressLearnMore}
  title="Download Rese"
/>
),
headerTitleStyle: { flex: 1, textAlign: 'center' },
}} />

</Stack.Navigator>
</TailwindProvider>
</NavigationContainer>
  );
}