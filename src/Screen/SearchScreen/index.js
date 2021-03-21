import React, {useState} from 'react';
import {StyleSheet, FlatList, TextInput, View} from 'react-native';

// location-pin
import AntDesign from 'react-native-vector-icons/AntDesign';
import SearchResult from '../../Components/SearchResult';
import items from '../../Assets/data/search';
import {lightGray} from '../../Config/colors';

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
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
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
