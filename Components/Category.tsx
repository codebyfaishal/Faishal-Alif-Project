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
import {AccordionItem} from 'react-native-accordion-list-view';
import useFetchDetails from './useFetchDetails';

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
  const { itemsDetail, loadingDetail, errorDetail } = useFetchDetails(selectedCategory);

  const data = [
    {
      id: 0,
      title: 'Lorem Ipsum is simply dummy',
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 1,
      title: 'Lorem Ipsum is simply dummy',
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];

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

  const jokesMap = (props.category.itemDetails?.itemsDetail?.jokes.joke || []).reduce((acc, joke) => {
    if (!acc[joke.category]) {
      acc[joke.category] = [];
    }
    acc[joke.category].push(joke);
    return acc;
  }, {});
  console.log('jokesMap', jokesMap)

  const selectedJokes = jokesMap[selectedCategory] || [];
  console.log('tttt', selectedJokes )
  selectedJokes.map((joke) => <Text key={joke.id}>{joke.joke}</Text>)



  return (
    <SafeAreaView style={styles.container}>
     <ScrollView style={styles.container}>
        {props.category.items.map((item, index) => (
          <AccordionItem
            key={item.id}
            customTitle={() => <Text>{index + 1} {item}</Text>}
            // customBody={() => <Text>{item}</Text>}
            customBody={() => {
              const jokes = props.category.itemsDetail.itemsDetail?.jokes;
              return jokes ? (
                jokes.map((joke) => (
                  <Text key={joke.id}>{joke.joke}</Text>
                ))
              ) : (
                <Text>No jokes found.</Text>
              );
            }}
            animationDuration={400}
            isOpen={false}
            // onPress={(isOpen) => console.log(isOpen)}
            onPress={() => {
              setSelectedCategory(item)
            }}
          />
        ))}
      </ScrollView>
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
  container: {
    paddingVertical: '2%',
    paddingHorizontal: '3%',
    height: '100%',
    backgroundColor: '#e7e7e7',
  },
});
