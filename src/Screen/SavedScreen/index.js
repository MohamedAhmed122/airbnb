import React from 'react';
import {FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';
import Post from '../../Components/Post';

export default function SavedScreen() {
  const {carts: items} = useSelector(state => state.cart);
  console.log(items);

  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={items => items.id.toString()}
        renderItem={({item}) => <Post items={item} />}
      />
    </View>
  );
}
