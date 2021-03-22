/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import Post from '../../Components/Post';
import {gray} from '../../Config/colors';

export default function SavedScreen() {
  const {carts: items} = useSelector(state => state.cart);

  return (
    <View>
      {items.length > 0 ? (
        <FlatList
          data={items}
          keyExtractor={items => items.id.toString()}
          renderItem={({item}) => <Post items={item} inverted={false} />}
        />
      ) : (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '50%',
          }}>
          <Text style={{fontSize: 19, color: gray}}>
            You haven't Saved Items yet
          </Text>
        </View>
      )}
    </View>
  );
}
