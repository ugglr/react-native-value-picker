import React, {useRef, useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

import {ScrollPicker} from 'react-native-value-picker';

import {MOCK_DATA} from './mockData';

function BottomSheetExample() {
  const [pickedValue, setPickedValue] = useState(7);
  const refRBSheet = useRef();

  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>Bottom Sheet Example</Text>
      <Text style={styles.Subtitle}>Picked Value: {pickedValue}</Text>
      <Text style={styles.Description}>
        Notice that the scroll picker automatically scrolls to the picked row /
        Item
      </Text>

      <Button
        style={styles.Button}
        title="Open Picker"
        onPress={() => refRBSheet.current.open()}
      />

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={300}
        customStyles={{
          draggableIcon: {
            backgroundColor: '#000',
          },
          container: {
            borderRadius: 12,
          },
        }}>
        {/* Start of Scroll Picker */}
        {/*
            The underlying FlatList is not wrapped with a View.
            So to align it in the sheet I wrap the picker and control
            the positioning. I like that approach because devs has full control
            over how the picker is placed & aligned.
        */}
        <View style={styles.SheetView}>
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
          />
        </View>
        {/* End of Scroll Picker */}
      </RBSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    height: '100%',
    width: '100%',
    paddingTop: 30,
    alignItems: 'center',
  },
  Title: {
    fontSize: 30,
    marginBottom: 60,
  },
  Subtitle: {
    fontSize: 22,
    color: 'red',
    marginBottom: 32,
  },
  Description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 100,
  },
  // The underlying FlatList is not wrapped with a View.
  // So to align it in the sheet I wrap the picker and control
  // the positioning. I like that approach because dev has full control
  // over how the picker is placed & aligned.
  SheetView: {
    width: '100%',
    height: '100%',
    paddingBottom: 32,
    alignItems: 'center',
  },
});

export default BottomSheetExample;
