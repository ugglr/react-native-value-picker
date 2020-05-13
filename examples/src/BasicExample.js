import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// import {ScrollPicker} from 'react-native-scroll-picker';

import ScrollPicker from './ScrollPicker';

import {MOCK_DATA} from './mockData';

function BasicExample() {
  const [pickedValue, setPickedValue] = useState(1);

  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>Basic Example</Text>
      <Text>Current Value Picked: {pickedValue}</Text>

      <View style={styles.PickerContainer}>
        <ScrollPicker
          currentValue={pickedValue}
          extraData={pickedValue}
          list={MOCK_DATA}
          onItemPress={setPickedValue}
          selectedColor="blue"
          labelColor="black"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Title: {
    fontSize: 28,
  },
  PickerContainer: {
    height: 300,
    width: '100%',
    alignItems: 'center',
    marginTop: 50,
  },
});

export default BasicExample;
