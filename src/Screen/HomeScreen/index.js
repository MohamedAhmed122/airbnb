import React from 'react';
import {ImageBackground, Pressable, StyleSheet, Text} from 'react-native';
import Fontsito from 'react-native-vector-icons/Fontisto';
import {white, black, primary} from '../../Config/colors';

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require('./wallpaper.jpg')}
      style={styles.image}
      resizeMode="cover">
      <Pressable style={styles.searchBtn}>
        <Fontsito name="search" color={primary} size={25} />
        <Text style={styles.searchBtnText}>where are you going?</Text>
      </Pressable>
      <Text style={styles.title}>GO</Text>
      <Text style={styles.title2}>Near</Text>
      <Pressable style={styles.btn}>
        <Text style={styles.btnText}>Explore Nearby stays</Text>
      </Pressable>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 500,
    width: '100%',
  },
  searchBtn: {
    left: '10%',
    position: 'absolute',
    top: 60,
    backgroundColor: white,
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  searchBtnText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
  },
  title: {
    color: white,
    position: 'absolute',
    top: 200,
    left: 40,
    fontSize: 60,
    fontWeight: '800',
  },
  title2: {
    color: white,
    position: 'absolute',
    top: 260,
    left: 40,
    fontSize: 60,
    fontWeight: '800',
  },
  btn: {
    position: 'absolute',
    top: 360,
    left: 40,
    backgroundColor: white,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
    width: 170,
    borderRadius: 10,
  },
  btnText: {
    color: black,
    fontWeight: 'bold',
  },
});
