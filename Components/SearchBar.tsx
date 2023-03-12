import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
  
    const onChangeSearch = (query) => setSearchQuery(query);
  
    return (
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
    );
  };

  const styles = StyleSheet.create({
    searchBar: {
      backgroundColor: '#F5F5F5',
      padding: 10,
    },
    input: {
      backgroundColor: '#FFFFFF',
      borderRadius: 5,
      height: 40,
      paddingHorizontal: 20,
    },
  });

  export default SearchBar;