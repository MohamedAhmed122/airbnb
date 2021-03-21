import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {primary, lightGray, gray} from '../../Config/colors';

export default function Post({items}) {
  console.log(items);
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{uri: items.image}}
        style={styles.img}
        resizeMode="cover"
      />
      <View style={styles.contain}>
        <Text style={styles.subTitle}>{items.type} </Text>
        <Text style={styles.prize}>${items.totalPrice}</Text>
      </View>
      <Text style={styles.des}>{items.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginLeft: '5%',
    height: 320,
    backgroundColor: lightGray,
    marginTop: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: 200,
  },
  contain: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    justifyContent: 'space-between',
  },
  subTitle: {
    color: gray,
    fontSize: 20,
  },
  des: {
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 17,
  },
  prize: {
    margin: 0,
    fontSize: 20,
    color: primary,
  },
});
