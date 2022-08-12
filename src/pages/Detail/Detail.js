import React, {useState} from 'react';
import useFetch from '../../useFetch';
import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
export const Detail = ({route, detail, meals}) => {
  const data = useFetch('search.php?s=' + route.params.strMeal);
  return (
    <SafeAreaView>
      <View>
        <Image style={styles.image} source={{uri: data?.meals?.strMealThumb}} />
        <Text style={styles.title}>{data?.meals?.strMeal} Title</Text>
        <Text style={styles.title2}>{data?.meals?.strArea} Area</Text>
        <Text style={styles.desc}>
          {data?.meals?.strInstructions} Description
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  image: {
    height: 250,
    backgroundColor: 'orange',
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 5,
    flexDirection: 'row',
    resizeMode: 'contain',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(114,112,112,0.75)',
    textAlign: 'right',
  },
  title2: {
    fontSize: 20,
    color: 'black',
    alignSelf: 'flex-start',
    textAlign: 'right',
    borderEndColor: 'orange',
  },
  body_container: {
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  desc: {
    fontSize: 20,
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
  },
});
