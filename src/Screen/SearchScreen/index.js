import React, {useState} from 'react';
import {StyleSheet, FlatList, TextInput, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SearchResult from '../../Components/SearchResult';
import items from '../../Assets/data/search';
import {lightGray} from '../../Config/colors';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

export default function SearchScreen({navigation}) {
  const [textInput, setTextInput] = useState('');

  return (
    <View>
      <View style={styles.inputContainer}>
        <AntDesign name="arrowleft" size={30} />
        <TextInput
          value={textInput}
          onChangeText={setTextInput}
          style={styles.input}
          placeholder="Where are you going ?"
        />
      </View>
      <FlatList
        data={items}
        keyExtractor={items => items.id.toString()}
        renderItem={({item}) => (
          <SearchResult
            items={item}
            onPress={() => navigation.navigate('GuestScreens')}
          />
        )}
      />
      {/* <View>
        <GooglePlacesAutocomplete
          placeholder="where are you going?"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: 'AIzaSyAu8axlrbXc9Fv64E4NJdssfQwcm2h5XFA',
            language: 'en',
            types: '(cities)',
          }}
          styles={{
            textInput: styles.input,
          }}
          // suppressDefaultStyles
          renderRow={item => {
            <SearchResult
              items={item}
              onPress={() => navigation.navigate('GuestScreens')}
            />;
          }}
        />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    // marginTop: 40,
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: lightGray,
  },
  input: {
    flex: 1,
    fontSize: 20,
    marginLeft: 10,
  },
});
