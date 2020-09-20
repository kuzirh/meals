import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

interface MealItemTypes {
  title: string;
  onSelectMeal: CallableFunction;
  duration: number;
  complexity: string;
  affordability: string;
  image: string;
}

const MealItem = (props: MealItemTypes) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={() => props.onSelectMeal()}>
        <View>
          <View style={{ ...styles.mealHeader, ...styles.mealRow }}>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealDetails, ...styles.mealRow }}>
            <Text>{props.duration}m</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordability}</Text>
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
    backgroundColor: '#f5f5f5',
    overflow: 'hidden',
    borderRadius: 10,
  },
  mealHeader: {
    height: '85%',
  },
  mealDetails: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5 )',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
});
export default MealItem;
