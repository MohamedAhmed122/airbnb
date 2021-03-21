import React from 'react';
import {View, FlatList} from 'react-native';
import Post from '../../Components/Post';
import items from '../../Assets/data/feeds';
import {useNavigation} from '@react-navigation/core';

export default function RentScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={items => items.id.toString()}
        renderItem={({item}) => (
          <Post
            items={item}
            onPress={() => navigation.push('Rent Details', item)}
          />
        )}
      />
    </View>
  );
}
