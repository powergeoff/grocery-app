import { configureStore } from '@reduxjs/toolkit';
import groceryListReducer from './groceryListSlice';
import recipeListReducer from './recipeListSlice';

export const store = configureStore({
    reducer: {
      groceryList: groceryListReducer,
      recipeList: recipeListReducer
    },
  });