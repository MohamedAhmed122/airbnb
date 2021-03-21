import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {gray, lightGray} from '../../Config/colors';

export default function Guest({type, age, value, setValue}) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.type}>{type}</Text>
        <Text style={styles.age}>{age}</Text>
      </View>
      <View style={styles.iconContainer}>
        <AntDesign
          name="pluscircleo"
          size={35}
          color={gray}
          onPress={() => setValue(value + 1)}
        />
        <Text style={styles.value}>{value}</Text>
        <AntDesign
          name="minuscircleo"
          size={35}
          color={gray}
          onPress={() => {
            if (value > 0) {
              setValue(value - 1);
            }
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
    borderBottomWidth: 2,
    paddingBottom: 15,
    borderBottomColor: lightGray,
  },
  type: {
    fontSize: 18,
    marginBottom: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    marginHorizontal: 16,
    fontSize: 20,
  },
});
