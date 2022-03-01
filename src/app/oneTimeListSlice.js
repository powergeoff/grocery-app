import { createSlice } from '@reduxjs/toolkit';
import { loadStorage } from './localStorage';

const stateFromLocalStorage = loadStorage(2);

export const oneTimeListSlice = createSlice({
    name: 'oneTimeList',
    initialState: stateFromLocalStorage !== undefined ? stateFromLocalStorage : [],
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload);
        },
        removeItem: (state, action) => {
            //no id - have to use name
            return state.filter(id => id !== action.payload);
        },
        removeAllItems: (state, action) => {
            //should this remove from localStorage?? maybe not - pure reducer
            return action.payload;
        }
    }
});

export const { addItem, removeItem, removeAllItems } = oneTimeListSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectOneTimeList = (state) => state.oneTimeList;

export const selectItemByName = (state, name) => state.oneTimeList.find(element => element === name);

export default oneTimeListSlice.reducer;