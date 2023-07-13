import React, {useState} from 'react';
import {TailwindProvider} from 'tailwind-rn';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import utilities from './tailwind.json';
import { Index } from './components/Index'
import { Button } from 'react-native';

import PDF from 'react-native-pdf';
import ReactNativeBlobUtil from 'react-native-blob-util'
import ListItem from './components/listItems';

const Stack = createStackNavigator();

 //download
 const generatePDFUrl = () => {
  const jsonDataString = JSON.stringify(ListItem, null, 2);
  const pdfUrl = `data:application/pdf;base64,${btoa(jsonDataString)}`;
  return pdfUrl;
};

const downloadPDF = () => {
  const pdfUrl = generatePDFUrl();

  ReactNativeBlobUtil.config({
    fileCache: true,
    appendExt: 'pdf',
    addAndroidDownloads: {
      useDownloadManager: true,
      notification: true,
      title: 'YourPDFFile',
      description: 'Downloading PDF...',
      mime: 'application/pdf',
      mediaScannable: true,
      path: ReactNativeBlobUtil.fs.dirs.DownloadDir + '/YourPDFFile.pdf',
    },
  })
    .fetch('GET', pdfUrl)
    .then((res) => {
      console.log('PDF downloaded successfully:', res.path());
    })
    .catch((error) => {
      console.error('Error downloading PDF:', error);
    });
};

const pdfUrl = generatePDFUrl();

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
  onPress={downloadPDF}
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