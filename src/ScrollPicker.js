import React from "react";
import {
  FlatList,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

const LIGHT_GRAY = "#DEE2EE";

const ScrollPicker = ({
  list,
  extraData,
  onItemPress,
  currentValue,
  initialNumToRender,
  labelColor,
  separatorColor,
  selectedColor,
}) => {
  const pickedIndex = list.findIndex((item) => item.value === currentValue);
  const ItemHeight = 39.8;
  const LABEL_COLOR = labelColor || "black";
  const SELECTED_COLOR = selectedColor || "blue";
  const SEPARATOR_COLOR = separatorColor || LIGHT_GRAY;

  const FlatListItemSeparator = () => {
    return (
      // Item Separator
      <View
        style={{ height: 0.8, width: "100%", backgroundColor: SEPARATOR_COLOR }}
      />
    );
  };

  const Row = ({ value, label, index }) => {
    return (
      <TouchableOpacity style={styles.Row} onPress={() => onItemPress(value)}>
        {pickedIndex === index ? (
          <Text
            style={{
              ...styles.RowText,
              color: SELECTED_COLOR,
            }}
          >{`${label}`}</Text>
        ) : (
          <Text
            style={{ ...styles.RowText, color: LABEL_COLOR }}
          >{`${label}`}</Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={{ height: "90%", width: "90%" }}>
        <FlatList
          data={list}
          extraData={extraData}
          initialNumToRender={initialNumToRender}
          ItemSeparatorComponent={FlatListItemSeparator}
          renderItem={({ item, index }) => (
            <Row value={item.value} label={item.label} index={index} />
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

const styles = StyleSheet.create({
  Row: {
    height: 39,
    paddingTop: 6,
    paddingBottom: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  RowText: {
    fontSize: 17,
    textAlign: "center",
  },
});

export default ScrollPicker;
