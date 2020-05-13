import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function BottomSheetExample() {
  return (
    <View style={styles.Container}>
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    height: '100%',
    width: '100%',
  },
});

export default BottomSheetExample;
