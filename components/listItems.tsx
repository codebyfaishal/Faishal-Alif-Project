import React from 'react';
import { View, Text } from 'react-native';
import {useTailwind} from 'tailwind-rn';

const listItems = ({ obat }) => {
    const tailwind = useTailwind();

  return (
    <View style={tailwind('bg-gray-200 p-4 mb-4')}>
        <Text style={tailwind('text-gray-800 font-bold')}>{"R/"} {obat.namaObat}</Text>
        <Text style={tailwind('text-gray-600')}>{obat.waktuObat}</Text>
        <Text style={tailwind('text-gray-600')}>{obat.catatanObat}</Text>
    </View>
  );
};

export default listItems;