import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const CategoryGridTile = (props: {
  title: string;
  color: string;
  onSelectGrid: CallableFunction;
}) => {
  return (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() => props.onSelectGrid()}
    >
      <View
        style={{ ...styles.container, ...{ backgroundColor: props.color } }}
      >
        <Text style={styles.title} numberOfLines={2}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    textAlign: 'right',
  },
});
export default CategoryGridTile;
