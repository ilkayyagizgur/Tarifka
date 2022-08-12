import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image, SafeAreaView,
} from "react-native";

const CategoryCard = props => {
  return (
    <SafeAreaView style={{backgroundColor:'orange'}}>
      <TouchableWithoutFeedback onPress={props.onclick}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{uri: props.categories.strCategoryThumb}}
          />
          <Text style={styles.title}>{props.categories.strCategory}</Text>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};
export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginVertical: 5,
    marginHorizontal: 7,
    padding: 5,
    flexDirection: 'row',
    borderBottomLeftRadius: 100,
    borderTopLeftRadius: 100,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
    borderColor: '#919090',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    alignContent: 'center',
    marginLeft: 20,
    marginTop: 37,
  },
  image: {
    marginLeft: 30,
    backgroundColor: '#fff',
    width: 100,
    minHeight: 100,
    resizeMode: 'contain',
  },
});
