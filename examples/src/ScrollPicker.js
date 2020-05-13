import React from 'react';
import {FlatList, View, TouchableOpacity, Text, StyleSheet} from 'react-native';

// import { BLUE, DARKEST_GRAY, LIGHT_GRAY } from "../styles/theme";

/* const Item = styled.TouchableOpacity`
  height: 39;
  padding-top: 6;
  padding-bottom: 8;
  align-items: center;
  justify-content: center;
`;

const ItemText = styled.Text`
  font-size: 17;
  color: ${(props) => (props.picked ? BLUE : DARKEST_GRAY)};
  text-align: center;
`; */

const LIGHT_GRAY = '#DEE2EE';

const ScrollPicker = ({
  list,
  extraData,
  onItemPress,
  currentValue,
  initialNumToRender,
}) => {
  const pickedIndex = list.findIndex(item => item.value === currentValue);
  const ItemHeight = 39.8;

  const FlatListItemSeparator = () => {
    return (
      // Item Separator
      <View style={{height: 0.8, width: '100%', backgroundColor: LIGHT_GRAY}} />
    );
  };

  const Row = ({value, label, index}) => {
    return (
      <TouchableOpacity style={styles.Row} onPress={() => onItemPress(value)}>
        {pickedIndex === index ? (
          <Text style={styles.RowTextSelected}>{`${label}`}</Text>
        ) : (
          <Text style={styles.RowText}>{`${label}`}</Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={{height: '90%', width: '90%'}}>
        <FlatList
          data={list}
          extraData={extraData}
          initialNumToRender={initialNumToRender}
          ItemSeparatorComponent={FlatListItemSeparator}
          renderItem={({item, index}) => (
            <Row value={item.value} label={item.label} index={index} />
          )}
          keyExtractor={item => item.label}
          getItemLayout={(data, index) => ({
            length: ItemHeight,
            offset: ItemHeight * index,
            index,
          })}
          initialScrollIndex={pickedIndex - 2}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Row: {
    height: 39,
    paddingTop: 6,
    paddingBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  RowText: {
    fontSize: 17,
    textAlign: 'center',
  },
  RowTextSelected: {
    fontSize: 17,
    textAlign: 'center',
    color: 'blue',
  },
});

export default ScrollPicker;
