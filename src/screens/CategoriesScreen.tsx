import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = (props: {
  navigation: { push: CallableFunction };
}) => {
  const renderGridItem = (itemData: { item: { title: string } }) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => props.navigation.push('CategoryMealsScreen')}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      keyExtractor={(item, id) => item.id}
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});
export default CategoriesScreen;
