import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {lightGrayPlus, black} from '../../Config/colors';

const AppInput = ({
  icon,
  placeholder,
  style,
  onChangeText,
  endIcon,
  onIconPress,
  EndIcon,
  endColorIcon = 'gray',
  onFocus,
  ...otherProps
}) => {
  return (
    <View style={styles.container}>
      {icon && <AntDesign name="search1" size={24} color="gray" />}
      <TextInput
        onChangeText={onChangeText}
        style={[styles.inputText, style]}
        onFocus={onFocus}
        placeholder={placeholder}
        {...otherProps}
      />
      {EndIcon && <EndIcon {...otherProps} />}
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  container: {
    width: '95%',
    marginLeft: 10,
    backgroundColor: lightGrayPlus,
    height: 50,
    borderRadius: 25,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 13,
  },
  inputText: {
    backgroundColor: 'transparent',
    width: 'auto',
    height: '100%',
    marginLeft: 10,
    color: black,
    fontSize: 17,
    flex: 1,
  },
});
