import { configureStore } from '@reduxjs/toolkit';
import groceryListReducer from './groceryListSlice';
import recipeListReducer from './recipeListSlice';
import oneTimeListReducer from './oneTimeListSlice';

export const store = configureStore({
    reducer: {
      groceryList: groceryListReducer,
      recipeList: recipeListReducer,
      oneTimeList: oneTimeListReducer
    },
  });