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
  Dimensions,
  Button,
  FlatList
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Carousel, { Pagination } from 'react-native-snap-carousel'
import SearchBar from './SearchBar';

import {connect} from 'react-redux';
import {getCategoryRequest, getBannersRequest, getHighlightsRequest, getHeadersRequest, getRecommendationsRequest} from '../actions/CategoryAction';

const HomeScreen = props => {
    console.log("PROPS", props.category)
    // console.log("PROPS HEADERS", props.category.headers)
  const {getCategoryRequest, getBannersRequest,getHighlightsRequest, getHeadersRequest,getRecommendationsRequest, recommendations,  category, banners, highlights, headers, loading, navigation} = props;

  //BANNER
  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)
 const SLIDER_WIDTH = Dimensions.get('window').width + 80
 const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)





  useEffect(() => {
    getCategoryRequest();
    getBannersRequest();
    getHighlightsRequest();
    getHeadersRequest();
    getRecommendationsRequest();
  }, []);

  // Condition when Fetch
  if (props.category.loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#26D27F" />
      </View>
    );
  }



  //banners
  const renderBanners = ({ item }) => {
    return (
      <View style={styles.containerBanners} key={index}>
        <Image source={{ uri: item.imagePath }} style={styles.imageBanners} />
      </View>
    );
  };

  //highlights
  const renderHighlights = ({ item }) => {
    return (
      <View style={styles.containerBanners} key={index}>
        <Image source={{ uri: item.coreProgram.thumbnailUrl }} style={styles.imageBanners} />
      </View>
    );
  };

    //headers
    const renderHeaders = ({ item }) => {
      return (
        <View style={styles.flatlistStyle} key={index}>
          <Image source={{ uri: item.headerDetails.coaches }} style={styles.imageBanners} />
          <Text>Konsultasi Karier</Text>
          <Text>{item.coreProgramType} Development Practicioner</Text>
          <Text>{item.headerDetails.businessFields}</Text>
        </View>
      );
    };

    //Recommendations
    const renderRecommendations = ({ item }) => {
      return (
        <View style={styles.flatlistStyle} key={index}>
          <Image source={{ uri: item.thumbnailUrl }} style={styles.imageBanners} />
          <Text>Konsultasi Karier</Text>
          <Text>{item.title}</Text>
        </View>
      );
    };









  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.card}>
            <Text style={styles.textAnnounce}>
             {props.category.items.description}
          </Text>
          </View>
          <SearchBar />
          {/* <View style={styles.divider}></View> */}
          <ScrollView>
          {/* //BANNERS// */}
          <View style={styles.spaceSection}>
          <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={props.category.banners}
        renderItem={renderBanners}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
            <Pagination
        dotsLength={props.category.banners.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.92)'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />

{/* // SECTION SOLUSI// */}
      <View>
      <Text style={styles.textSection}>
             Solusi Program Terlengkap
          </Text>
      </View>
      <View style={styles.row}>
      <Button
  title="Pra Kerja"

/>
<Button
  title="Siap Usaha"

/>
<Button
  title="Siap Mahir"

/>
<Button
  title="Siap Karir"

/>
      </View>
    </View>
    <View style={styles.divider}></View>

    {/* //SECTION PILIHAN TERBAIK */}
    <View>
      <Text style={styles.textSectionValue}>
             Pilihan Terbaik untuk kamu
          </Text>
      </View>
      <View>
      <Text style={styles.textSection}>
             Bisnis Mudah Langsung Raih Cuan Melimpah!
          </Text>
      </View>
      <View>
      <Text style={styles.textSectionValue}>
             Rasakan Pengalaman belajar bisnis yang beda dari yang lain
          </Text>
      </View>
      <View style={styles.styleButton}>
      <Button
  title="Cek Selengkapnya ->"

/>
      </View>
      <View style={styles.spaceSection}>
      <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={props.category.highlights}
        renderItem={renderHighlights}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
            <Pagination
        dotsLength={props.category.highlights.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.92)'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
      </View>
      <View style={styles.divider}></View>

      {/* //SECTION HEADERS/COACH// */}
      <View>
      <Text style={styles.textSection}>
             Pilihan Coach dan Raih Karier Impian Kamu
          </Text>
      </View>
      <View>
      <Text style={styles.textSectionValue}>
             Temukan coach sesuai kebutuhan karier, untuk persiapan dan pengembangan karier yang lebih matang
          </Text>
      </View>
      <View style={styles.spaceSection}>
      {/* <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={props.category.headers}
        renderItem={renderHeaders}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
            <Pagination
        dotsLength={props.category.highlights.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.92)'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      /> */}
        <FlatList
         data={props.category.headers}
        renderItem={renderHeaders}
        keyExtractor={item => item.name}
        horizontal
        
      />
      </View>
      <View style={styles.divider}></View>
      {/* //SECTION RECOMMENDATIONS */}
      <View>
      <Text style={styles.textSection}>
             Rekomendasi Buat Kamu
          </Text>
      </View>
 

      <FlatList
         data={props.category.recommendations}
        renderItem={renderRecommendations}
        keyExtractor={item => item.name}
        horizontal
        
      />

      </ScrollView>
    </SafeAreaView>
  );
};

export default connect(({category}) => ({category}), {
    getCategoryRequest,
    getBannersRequest,
    getHighlightsRequest,
    getHeadersRequest,
    getRecommendationsRequest
})(HomeScreen);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#B3E5FC',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    height: 60,
    // width: '100%'
  },
  textAnnounce: {
    textAlign: 'left',
    fontSize: 13,
    marginHorizontal: 12,
    marginVertical: 12
  },
  divider:{
    borderWidth: 3,
    borderColor:'#BDBDBD',
  },
  imageBanners: {
    width: 350,
    height: 200,
    resizeMode: 'center',
  },
  containerBanners: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: 350,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginHorizontal: -50,
    justifyContent: 'center', // center vertically
    alignItems: 'center', // center horizontally
  },
  textSection: {
    textAlign: 'left',
    fontSize: 14,
    fontWeight: "bold",
    marginHorizontal: 12,
    marginVertical: 12
  },
  textSectionValue: {
    textAlign: 'left',
    fontSize: 14,
    marginHorizontal: 12,
    marginVertical: 12,
    color: 'grey'
  },
  styleButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginVertical: 15
  },
  spaceSection: {
    marginVertical: 12,
    marginHorizontal: -10,
  },
  flatlistStyle: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: 350,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginHorizontal: 10,
    justifyContent: 'center', // center vertically
    alignItems: 'center', // center horizontally
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
