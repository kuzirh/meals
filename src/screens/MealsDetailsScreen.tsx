import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface MealsDetailsScreenTypes {
  route: { params: { mealId: string } };
}

const MealsDetailsScreen = (props: MealsDetailsScreenTypes) => {
  const mealId = props.route.params.mealId;
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
