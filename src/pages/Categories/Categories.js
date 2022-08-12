import React, {useEffect, useState} from 'react';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import axios from 'axios';
import useFetch from '../../useFetch';
import {FlatList} from 'react-native';

export const Categories = ({navigation, props}) => {
  function MealsButton(strCategory) {
    navigation.navigate('MealsPage', {strCategory});
  }

  const {data} = useFetch("categories.php");

  const renderCategory = ({item}) => (
    <CategoryCard
      onclick={() => MealsButton(item.strCategory)}
      categories={item}
    />
  );
  return (
    <FlatList data={data?.categories} renderItem={renderCategory} />
  );
};
