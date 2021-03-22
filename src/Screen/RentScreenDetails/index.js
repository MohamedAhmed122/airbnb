/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import AppButton from '../../Components/AppButton/AppButton';
import {gray, primary} from '../../Config/colors';

export default function RentDetails({route}) {
  const item = route.params;
  console.log(item);
  return (
    <View>
      <Image
        source={{uri: item.image}}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.container}>
        <Text style={styles.title}>{item.type}</Text>
        <Text style={styles.price}>${item.totalPrice}</Text>
      </View>
      <Text style={styles.bedroom}>
        {item.bed} Bed - {item.bedroom} Bedroom
      </Text>
      <Text style={styles.des}>{item.title}</Text>
      <View style={{marginTop: 40}}>
        <AppButton title="Book Now" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 400,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 14,
  },
  title: {
    fontSize: 20,
  },
  price: {
    color: primary,
    fontSize: 18,
  },
  bedroom: {
    color: gray,
    fontSize: 17,
    marginHorizontal: 20,
    marginTop: 10,
  },
  des: {
    marginTop: 15,
    fontSize: 17,
    textAlign: 'center',
  },
});
