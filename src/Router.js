import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import axios from 'axios';
import CategoryCard from './components/CategoryCard/CategoryCard';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {Categories} from './pages/Categories/Categories';
import Meals from "./pages/Meals/Meals";
import Detail from "./pages/Detail/Detail";

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'CategoriesPage'}
          component={Categories}
          options={{
            title: 'Categories',
            headerStyle: {backgroundColor: 'white'},
            headerTitleStyle: {color: 'orange'},
          }}
        />
        <Stack.Screen
          name={'MealsPage'}
          component={Meals}
          options={{
            title: 'Meals',
            headerStyle: {backgroundColor: 'white'},
            headerTitleStyle: {color: 'orange'},
            headerTintColor: 'orange',
          }}
        />
        <Stack.Screen
          name={'DetailPage'}
          component={Detail}
          options={{
            title: 'Detail',
            headerStyle: {backgroundColor: 'white'},
            headerTitleStyle: {color: 'orange'},
            headerTintColor: 'orange',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
