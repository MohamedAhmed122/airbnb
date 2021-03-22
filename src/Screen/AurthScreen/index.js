import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import List from '../../Components/List';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {lightGray, primary} from '../../Config/colors';

export default function AuthScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Image
          source={{
            uri:
              'https://www.enigma-mag.com/wp-content/uploads/2020/09/DSC019782-edit.jpg',
          }}
          resizeMode="cover"
          style={styles.image}
        />
        <View>
          <Text style={styles.email}>Mohamed@gmail.com</Text>
          <Text style={styles.name}>Mohamed Youssef</Text>
        </View>
      </View>
      <View style={styles.list}>
        <List
          text="Settings"
          Icon={() => (
            <AntDesign
              name="setting"
              style={styles.icon}
              size={25}
              color={'#ffc400'}
            />
          )}
        />
        <List
          text="History"
          Icon={() => (
            <Entypo
              name="bookmark"
              style={styles.icon}
              size={25}
              color={'#1976d2'}
            />
          )}
        />
        <List
          text="Booked"
          Icon={() => (
            <AntDesign
              name="checkcircle"
              style={styles.icon}
              size={25}
              color={'#388e3c'}
            />
          )}
        />
        <List
          text="Logout"
          Icon={() => (
            <AntDesign
              name="logout"
              style={styles.icon}
              size={25}
              color={primary}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    width: '100%',
    marginTop: 50,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    backgroundColor: lightGray,
    width: '100%',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  email: {
    fontSize: 17,
    marginBottom: 10,
  },
  list: {
    marginTop: 70,
  },
  icon: {
    marginLeft: 30,
  },
});
