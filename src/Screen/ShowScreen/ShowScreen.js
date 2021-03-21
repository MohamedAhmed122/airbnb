import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {gray, primary} from '../../Config/colors';
import RentScreen from '../RentScreen';
import MapScreen from '../MapScreen';

export default function ShowScreen() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          style={activeTab === 0 ? styles.tab : styles.tabInactive}
          onPress={() => setActiveTab(0)}>
          <Text
            style={activeTab === 0 ? styles.tabText : styles.tabTextInactive}>
            View
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={activeTab === 1 ? styles.tab : styles.tabInactive}
          onPress={() => setActiveTab(1)}>
          <Text
            style={activeTab === 1 ? styles.tabText : styles.tabTextInactive}>
            Map
          </Text>
        </TouchableOpacity>
      </View>
      {activeTab === 0 && <RentScreen />}
      {activeTab === 1 && <MapScreen />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 50,
    margin: 10,
    alignItems: 'center',
    borderLeftColor: 'white',
    width: '100%',
  },
  tab: {
    width: '45%',
    margin: 5,
    alignItems: 'center',
    borderBottomColor: primary,
    borderBottomWidth: 2,
    paddingBottom: 10,
  },
  tabText: {
    fontSize: 16,
    color: primary,
    fontWeight: 'bold',
  },
  tabInactive: {
    width: '45%',
    margin: 5,
    alignItems: 'center',
    borderBottomColor: gray,
    borderBottomWidth: 2,
    paddingBottom: 10,
  },
  tabTextInactive: {
    fontSize: 16,
    color: gray,
    fontWeight: 'bold',
  },
});
