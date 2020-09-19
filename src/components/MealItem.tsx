import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const MealItem = (props: {
  title: string;
  onSelectMeal: CallableFunction;
  duration: number;
}) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={() => props.onSelectMeal()}>
        <View>
          <View style={{ ...styles.mealHeader, ...styles.mealRow }}>
            <Text>{props.title}</Text>
          </View>
          <View style={{ ...styles.mealDetails, ...styles.mealRow }}>
            <Text>{props.duration}m</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  mealRow: {
    flexDirection: 'row',
  },
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#ccc',
  },
  mealHeader: {
    height: '90%',
  },
  mealDetails: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
});
export default MealItem;
