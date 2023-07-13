import React from 'react';
import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import ListItem from './listItems'; // Updated import statement
import { data } from './service';

export const Index = () => {
  const tailwind = useTailwind();

  return (
    <View style={tailwind('flex-1')}>
      <ScrollView contentContainerStyle={tailwind('p-4')}>
      {/* <Text> {"Jika anda mengalami gejala beratu atau tidak membaik setelah minum obat yang telah diresepkan, silahkan kunjungin rumah sakit / fasilitas kesehatan terdekat"}</Text> */}
      <View style={tailwind('bg-red-200 px-3 py-1 mb-3 ')}>
					<Text style={tailwind('text-red-800 text-justify')}>
                    Jika anda mengalami gejala beratu atau tidak membaik setelah minum obat yang telah diresepkan, silahkan kunjungin rumah sakit / fasilitas kesehatan terdekat
					</Text>
				</View>

        <Text> {"No resep:"}</Text>
        <Text> {"PRV-01-5/DR-1684812329675"}</Text>
        {data.map((obat, index) => (
          <ListItem key={index} obat={obat} /> // Updated component name
        ))}
        <Text style={tailwind('text-center')}> {"Pengembalian Resep hanya bisa dilakukan sekali dan jika anda sudah mengambil resep maka tidak bisa diulang"}</Text>
      </ScrollView>
    </View>
  );
};