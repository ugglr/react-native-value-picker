import React from "react";
import { FlatList, View } from "react-native";

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

const ScrollPicker = ({
  pickerValues,
  extraData,
  setPickerValue,
  pickerSelect,
  initialNumToRender,
}) => {
  const FlatListItemSeparator = () => {
    return (
      // Item Separator
      <View
        style={{ height: 0.8, width: "100%", backgroundColor: LIGHT_GRAY }}
      />
    );
  };

  const pickedIndex = pickerValues.findIndex(
    (item) => item.value === pickerSelect
  );
  const ItemHeight = 39.8;

  return (
    <>
      <View style={{ height: "90%", width: "90%" }}>
        <FlatList
          data={pickerValues}
          extraData={extraData}
          initialNumToRender={initialNumToRender}
          ItemSeparatorComponent={FlatListItemSeparator}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => setPickerValue(item.value)}>
              {pickedIndex === index ? (
                <Text picked>{`${item.label}`}</Text>
              ) : (
                <Text>{`${item.label}`}</Text>
              )}
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.label}
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

export default ScrollPicker;
