import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function RentDetails({route}) {
  const item = route.params;
  console.log(item);
  return (
    <View>
      <Image
        source={{uri: item.image}}
        resizeMethod="cover"
        style={styles.image}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({});
