import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import EnTypo from 'react-native-vector-icons/Entypo';
import {lightGray} from '../../Config/colors';

export default function SearchResult({items, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.icon}>
        <EnTypo name="location-pin" size={40} />
      </View>
      <Text style={styles.text}> {items.description}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: lightGray,
  },
  icon: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: lightGray,
    borderRadius: 10,
    marginRight: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
  },
});
