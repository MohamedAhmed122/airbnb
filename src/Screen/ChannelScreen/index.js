import React from 'react';
import {
  Image,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  View,
  Keyboard,
} from 'react-native';
import {primary, white} from '../../Config/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import AppInput from '../../Components/AppInput';
import Message from '../../Components/Message';
// import Message from '../Components/Message/Message';

export default function ChannelScreen({route, navigation}) {
  const item = route.params;

  const handleBack = () => navigation.goBack();

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <View style={styles.flex}>
          <AntDesign
            onPress={() => handleBack()}
            name="left"
            size={24}
            color={primary}
          />
          <Image
            source={{uri: item.image || imageHolder}}
            resizeMode="cover"
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.date}>Last Seen At ....</Text>
          </View>
        </View>
        <AntDesign
          name="setting"
          size={24}
          color={primary}
          style={styles.icon}
        />
      </View>
      <ScrollView>
        <Message />
      </ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.sender}
          //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <AppInput
            style={styles.input}
            endColorIcon={primary}
            placeholder="Send Message"
            EndIcon={() => (
              <FontAwesome name="send" size={20} color={primary} />
            )}
          />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    width: '100%',
    marginTop: 34,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: white,
    height: 70,
    marginBottom: 20,
    width: '100%',
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 40,
    marginLeft: 10,
  },
  name: {
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 10,
  },
  sender: {
    backgroundColor: white,
    width: '100%',
    marginBottom: 50,
  },
  input: {
    marginBottom: 10,
  },
});

const imageHolder =
  'https://www.enigma-mag.com/wp-content/uploads/2020/09/DSC019782-edit.jpg';
