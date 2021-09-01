import { createSlice } from '@reduxjs/toolkit';
import { loadStorage } from './localStorage';

const stateFromLocalStorage = loadStorage(0);

export const groceryListSlice = createSlice({
    name: 'groceryList',
    initialState: stateFromLocalStorage !== undefined ? stateFromLocalStorage : [],
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        toggle: (state, action) => {
            
            if (action.payload.checked){
                state.push(action.payload);
            }
            else {
                return state.filter(({id}) => id !== action.payload.id);
            }
        },
        add: (state, action) => {
            state.push(action.payload);
        },
        remove: (state, action) => {
            return state.filter(id => id !== action.payload);
        },
        removeAll: (state, action) => {
            return action.payload;
        }
        //addRecipe: (state, )
    }
});

export const { add, remove, toggle, removeAll } = groceryListSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectGroceryList = (state) => state.groceryList;

export const selectGroceryById = (state, id) => state.groceryList.find(element => element === id);

export default groceryListSlice.reducer;
