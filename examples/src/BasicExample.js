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
        />
      </View>
      <Text style={{fontSize: 22, textAlign: 'center'}}>
        We can customize the look by setting the labelColor, separatorColor and
        selectedColor props
      </Text>
      <View style={styles.PickerContainer}>
        <ScrollPicker
          // We need to tell the picker the current picked value
          currentValue={pickedValue}
          // The picker is a pure component so we need to tell it
          // what data it needs to subscribe to, otherwise it won't
          // re-render
          extraData={pickedValue}
          // The array of objects which makes up the list
          list={MOCK_DATA}
          // Callback function to update the picked value
          onItemPress={setPickedValue}
          // Changes the text color in the list
          labelColor="blue"
          // Changes color of the row separator in the list
          separatorColor="purple"
          // Changes color of the text of the picked item in the list
          selectedColor="red"
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
    marginBottom: 10,
  },
  PickerContainer: {
    height: 180,
    width: '100%',
    alignItems: 'center',
    marginTop: 50,
  },
});

export default BasicExample;
