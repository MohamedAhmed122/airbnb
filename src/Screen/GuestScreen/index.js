/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useState} from 'react';
import {View} from 'react-native';
import Guest from '../../Components/Guest';
import AppButton from '../../Components/AppButton/AppButton';

export default function GuestScreen({navigation}) {
  const [adultsValue, setAdultsValue] = useState(0);
  const [childrenValue, setChildrenValue] = useState(0);
  const [infantsValue, setInfantsValue] = useState(0);

  return (
    <View style={{marginTop: 50}}>
      <Guest
        type="Adults"
        age="from 20 to above"
        value={adultsValue}
        setValue={setAdultsValue}
      />
      <Guest
        type="Children"
        age="from 2 to 20"
        value={childrenValue}
        setValue={setChildrenValue}
      />
      <Guest
        type="Infant"
        age="under 2"
        value={infantsValue}
        setValue={setInfantsValue}
      />
      <View style={{marginTop: 50}}>
        <AppButton
          title="Search"
          onPress={() => navigation.navigate('RentScreens')}
        />
      </View>
    </View>
  );
}
