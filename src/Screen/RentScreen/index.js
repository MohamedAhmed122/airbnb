import React from 'react';
import {View, FlatList} from 'react-native';
import Post from '../../Components/Post';
import items from '../../Assets/data/feeds';

export default function RentScreen({navigation}) {
  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={items => items.id.toString()}
        renderItem={({item}) => (
          <Post
            items={item}
            onPress={() => navigation.navigate('Rent Details', item)}
          />
        )}
      />
    </View>
  );
}
