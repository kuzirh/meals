import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
const CatergoryMealsScreen = (props: {
  route: { params: { categoryId: string } };
  navigation: { push: CallableFunction };
}) => {
  const { categoryId } = props.route.params;
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);
  return (
    <View style={styles.screen}>
      <Text> CatergoryMealsScreen</Text>
      <Text> {selectedCategory?.title}</Text>
      <Button
        title='Take me to details'
        onPress={() => props.navigation.push('MealsDetailsScreen')}
      />
    </View>
  );
};

CatergoryMealsScreen.navigationOptions = (navigationData: any) => {
  console.log(navigationData);
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default CatergoryMealsScreen;
