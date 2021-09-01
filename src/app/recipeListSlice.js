import { createSlice } from '@reduxjs/toolkit';
import { loadStorage } from './localStorage';

const stateFromLocalStorage = loadStorage(1);

export const recipeListSlice = createSlice({
    name: 'recipeList',
    initialState: stateFromLocalStorage !== undefined ? stateFromLocalStorage : [],
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        addRecipe: (state, action) => {
            state.push(action.payload);
        },
        removeRecipe: (state, action) => {
            return state.filter(id => id !== action.payload);
        },
        removeAllRecipes: (state, action) => {
            return action.payload;
        }
    }
});

export const { addRecipe, removeRecipe, removeAllRecipes } = recipeListSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectRecipeList = (state) => state.recipeList;

export const selectRecipeById = (state, id) => state.recipeList.find(element => element === id);

export default recipeListSlice.reducer;
