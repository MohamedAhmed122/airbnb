import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {black, primary} from '../../Config/colors';

export default function ChatRow({items, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.MainContainer}>
      <View style={styles.flex}>
        <Image
          source={{uri: items.image || imageHolder}}
          resizeMode="cover"
          style={styles.img}
        />
        <View>
          <Text style={styles.name}>{items.name}</Text>
          <Text style={styles.message}>Message</Text>
        </View>
      </View>
      <View>
        <Text style={styles.date}>{items.date}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 15,
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  img: {
    width: 55,
    height: 55,
    borderRadius: 27,
    marginRight: 23,
  },
  name: {
    color: black,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  message: {color: primary},

  date: {
    color: primary,
    marginRight: 10,
  },
});

const imageHolder =
  'https://www.enigma-mag.com/wp-content/uploads/2020/09/DSC019782-edit.jpg';
