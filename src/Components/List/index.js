import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {lightGray, lightGrayPlus} from '../../Config/colors';

export default function List({Icon, text, ...props}) {
  return (
    <Pressable style={styles.container}>
      {Icon && <Icon {...props} />}
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 5,
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    backgroundColor: lightGray,
    borderBottomWidth: 1,
    paddingBottom: 5,
    borderBottomColor: lightGrayPlus,
    marginTop: 3,
  },
  text: {
    marginLeft: 15,
    fontSize: 20,
  },
});
