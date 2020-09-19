import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CatergoryMealsScreen = (props: {
  navigation: { push: CallableFunction };
}) => {
  return (
    <View style={styles.screen}>
      <Text> CatergoryMealsScreen</Text>
      <Button
        title='Take me to details'
        onPress={() => props.navigation.push('MealsDetailsScreen')}
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
