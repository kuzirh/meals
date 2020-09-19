import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MealsDetailsScreen = (
  props: any,
  route: { params: { mealId: string } }
) => {
  const mealId = route.params.mealId;
  return (
    <View style={styles.screen}>
      <Text> MealsDetailsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default MealsDetailsScreen;
