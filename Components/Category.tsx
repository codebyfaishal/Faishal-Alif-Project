//Pokemons.js
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {ScrollView, FlatList} from 'react-native-gesture-handler';

import {Button, Actionsheet, useDisclose} from 'native-base';
import {connect} from 'react-redux';
import {getCategoryRequest} from '../actions/CategoryAction';

const Category = props => {
    console.log("PROPS", props)
  const {getCategoryRequest, category, loading, navigation} = props;

  const [selectedIndex, setSelectedIndex] = useState();
  console.log("selectedIndex", selectedIndex)
  console.log("setSelectedIndex", setSelectedIndex)
  const [selectedCategory, setSelectedCategory] = useState();
  console.log("selectedCategory", selectedCategory)
  console.log("setSelectedCategory", setSelectedCategory)
  const [isModalVisible, setIsModalVisible] = useState(false);
  console.log('isModalVisible', isModalVisible);
  console.log('setIsModalVisible', setIsModalVisible);

  useEffect(() => {
    getCategoryRequest();
  }, []);

  // Condition when Fetch
  if (props.category.loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#26D27F" />
      </View>
    );
  }

  //Handle Button
  const handleDecline = () =>
    setIsModalVisible(() => props.navigation.navigate('Pokemons Detail'));
  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  //buat komponen item
  const Item = ({name, onPress, index, item}) => (
    <TouchableOpacity key={index}    onPress={handleModal => {

        setSelectedIndex(index + 1);
        setSelectedCategory(name)
      }} style={styles.card}>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  );

  //render komponen item
  const renderItem = ({item}) => {
    return <Item name={item} onPress={() => setSelectedCategory(item)} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={category.items}
        renderItem={renderItem}
        keyExtractor={item => item.name}
        extraData={setSelectedCategory}
      />
      <Actionsheet isOpen={isModalVisible} disableOverlay={true}>
      </Actionsheet>
    </SafeAreaView>
  );
};

export default connect(({category}) => ({category}), {
    getCategoryRequest,
})(Category);

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 15,
    height: 100,
    marginHorizontal: 10,
  },
  thumb: {
    height: 260,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: '100%',
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  nameTitleModal: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 6,
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
    // width: '50%'
  },
  nameDescription: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 6,
    alignSelf: 'flex-start',
    marginHorizontal: 25,
    marginBottom: 6,
    // minWidth: '48%',
    textAlign: 'center',
  },
  nameValue: {
    fontSize: 20,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  item: {
    width: '50%', // is 50% of container width
  },
});
