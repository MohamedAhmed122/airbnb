/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SearchResult from '../../Components/SearchResult';
import {white} from '../../Config/colors';

export default function SearchScreen({navigation}) {
  const [textInput, setTextInput] = useState('');

  return (
    <View>
      <View style={styles.inputContainer}>
        <AntDesign name="arrowleft" size={30} />
        <View style={{width: '100%'}}>
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
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: white,
    height: 50,
  },
  input: {
    flex: 0.87,
    fontSize: 20,
    marginLeft: 10,
    borderRadius: 10,
  },
});
