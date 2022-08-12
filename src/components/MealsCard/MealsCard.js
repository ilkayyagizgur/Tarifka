import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const MealsCard = ({meals, onclick}) => {
  return (
    <SafeAreaView style={{backgroundColor: 'orange'}}>
      <TouchableWithoutFeedback onPress={onclick}>
        <View style={styles.container}>
          <ImageBackground
            style={styles.image}
            source={{uri: meals.strMealThumb}}>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <Text style={styles.title2}>{meals.strMeal}</Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  image: {
    height: 200,
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 5,
    flexDirection: 'row',
    resizeMode: 'contain',
  },
  title2: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(114,112,112,0.75)',
    textAlign: 'right',
  },
});

export default MealsCard;
