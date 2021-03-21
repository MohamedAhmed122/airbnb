/* eslint-disable react/react-in-jsx-scope */
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
    width: '98%',
    padding: 13,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    alignSelf: 'center',
  },
  text: {
    fontSize: 18,
    color: white,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
