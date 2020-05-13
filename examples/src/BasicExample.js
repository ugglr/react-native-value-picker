import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// import {ScrollPicker} from 'react-native-scroll-picker';

import ScrollPicker from './ScrollPicker';

const MOCK_DATA = [
  {
    value: 1,
    label: 'Number 1',
  },
  {
    value: 2,
    label: 'Number 2',
  },
  {
    value: 3,
    label: 'Number 3',
  },
  {
    value: 4,
    label: 'Number 5',
  },
  {
    value: 6,
    label: 'Number 6',
  },
  {
    value: 7,
    label: 'Number 7',
  },
  {
    value: 8,
    label: 'Number 8',
  },
  {
    value: 9,
    label: 'Number 9',
  },
  {
    value: 10,
    label: 'Number 10',
  },
  {
    value: 11,
    label: 'Number 11',
  },
  {
    value: 12,
    label: 'Number 12',
  },
  {
    value: 13,
    label: 'Number 13',
  },
  {
    value: 14,
    label: 'Number 14',
  },
  {
    value: 15,
    label: 'Number 15',
  },
  {
    value: 16,
    label: 'Number 16',
  },
  {
    value: 17,
    label: 'Number 17',
  },
];

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
