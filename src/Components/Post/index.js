import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {primary, lightGray, gray} from '../../Config/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import {addItemToCart} from '../../Redux/Cart/CartAction';

export default function Post({items, onPress}) {
  const [heartIcon, setHeartIcon] = useState(false);
  const dispatch = useDispatch();

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={{uri: items.image}}
        style={styles.img}
        resizeMode="cover"
      />
      <AntDesign
        style={styles.icon}
        name={!heartIcon ? 'hearto' : 'heart'}
        size={30}
        color={primary}
        onPress={() => {
          setHeartIcon(!heartIcon);
          dispatch(addItemToCart(items));
        }}
      />
      <View style={styles.contain}>
        <Text style={styles.subTitle}>{items.type} </Text>
        <Text style={styles.prize}>${items.totalPrice}</Text>
      </View>
      <Text style={styles.des}>{items.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginLeft: '5%',
    height: 320,
    backgroundColor: lightGray,
    marginTop: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: 200,
  },
  icon: {
    position: 'absolute',
    left: '85%',
    top: '5%',
  },
  contain: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    justifyContent: 'space-between',
  },
  subTitle: {
    color: gray,
    fontSize: 20,
  },
  des: {
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 17,
  },
  prize: {
    margin: 0,
    fontSize: 20,
    color: primary,
  },
});
