import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {primary, white} from '../../Config/colors';

export default function AppButton({title, onPress, color = primary}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {backgroundColor: color}]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: primary,
    width: '90%',
    marginLeft: '5%',
    padding: 13,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    color: white,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
