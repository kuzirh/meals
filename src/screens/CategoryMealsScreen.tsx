import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';
const CatergoryMealsScreen = (props: {
  route: { params: { categoryId: string } };
  navigation: { push: CallableFunction };
}) => {
  const rederMealItem = (itemData: {
    item: { title: string; duration: number };
  }) => {
    return (
      <MealItem
        title={itemData.item.title}
        onSelectMeal={() => {}}
        duration={itemData.item.duration}
      />
    );
  };
  const { categoryId } = props.route.params;
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, id) => item.id}
        renderItem={rederMealItem}
        style={{ width: '100%' }}
      />
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
export default CatergoryMealsScreen;
