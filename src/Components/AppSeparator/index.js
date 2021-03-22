/* eslint-disable react/self-closing-comp */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {lightGrayPlus} from '../../Config/colors';

export default function AppSeparator({color = lightGrayPlus}) {
  return <View style={[styles.separator, {backgroundColor: color}]}></View>;
}

const styles = StyleSheet.create({
  separator: {
    width: '95%',
    marginLeft: '2%',
    height: 2,
    backgroundColor: lightGrayPlus,
  },
});
