import React, {useEffect, useState} from 'react';
import useFetch from '../../useFetch';
import {FlatList} from 'react-native';

import MealsCard from '../../components/MealsCard/MealsCard';
export const Meals = ({route, navigation}) => {
  function DetailButton(strMeal) {
    navigation.navigate('DetailPage', {strMeal});
  }
  const {data} = useFetch('filter.php?c=' + route.params.strCategory);
  const renderMeals = ({item}) => (
    <MealsCard onclick={() => DetailButton(item.strMeal)} meals={item} />
  );
  return <FlatList data={data?.meals} renderItem={renderMeals} />;
};

export default Meals;
