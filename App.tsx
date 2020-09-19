import React, { useState } from 'react';
import { StyleSheet, Platform } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from './src/screens/CategoriesScreen';
import CategoryMealsScreen from './src/screens/CategoryMealsScreen';
import MealsDetailsScreen from './src/screens/MealsDetailsScreen';
import Colors from './src/constants//Colors';

type MealsParamList = {
  CategoriesScreen: undefined;
  CategoryMealsScreen: undefined;
  MealsDetailsScreen: undefined;
};

const MealsStack = createStackNavigator<MealsParamList>();

const MealsStackScreen = () => (
  <MealsStack.Navigator>
    <MealsStack.Screen
      name='CategoriesScreen'
      component={CategoriesScreen}
      options={{
        title: 'Meal Categories',
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor:
          Platform.OS === 'android' ? 'white' : Colors.primaryColor,
      }}
    />
    <MealsStack.Screen
      name='CategoryMealsScreen'
      component={CategoryMealsScreen}
      options={({ route }) => ({
        title: route?.params?.categoryTitle,
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor:
          Platform.OS === 'android' ? 'white' : Colors.primaryColor,
      })}
    />
    <MealsStack.Screen
      name='MealsDetailsScreen'
      component={MealsDetailsScreen}
      options={({ route }) => ({
        title: route?.params?.mealId,
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor:
          Platform.OS === 'android' ? 'white' : Colors.primaryColor,
      })}
    />
  </MealsStack.Navigator>
);

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default () => {
  const [fontLoaded, setFontLoaded] = useState<boolean>(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }
  return (
    <NavigationContainer>
      <MealsStackScreen />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
