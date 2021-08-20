import allData from '../data.json';

export const getGroceries = () => allData["groceries"];
export const getRecipies = () => allData["recipes"];

export const getGroceryByID = (id) => getGroceries().find(e => e.id === id)
export const getRecipeByID = (id) => getRecipies().find(e => e.id === id)

export const getItemsFromRecipe = (id) => getRecipeByID(id).items;