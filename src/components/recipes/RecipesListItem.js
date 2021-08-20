
import { Switch, ListItem, ListItemText } from '@material-ui/core';
import { add, remove } from "../../app/groceryListSlice";
import { addRecipe, removeRecipe, selectRecipeList } from '../../app/recipeListSlice';
import { useDispatch, useSelector } from 'react-redux';

function RecipesListItem({ recipe }) {
    const ID = recipe.id;
    const dispatch = useDispatch();
    const state = useSelector(selectRecipeList);
    const isChecked = state.find(id => id === ID) !== undefined ? true : false;
    const handleChange = (event) => {
        if (event.target.checked){
            dispatch(addRecipe(recipe.id));
            //add all grocery from the recipe to list
            recipe.items.forEach(gId => {
                dispatch(add(gId));
            });
        }
        else {
            dispatch(removeRecipe(recipe.id));
            //remove all recipe items from the list
            recipe.items.forEach(gId => {
                dispatch(remove(gId));
            });
        }
    }
    return(
        <ListItem key={ID} button>
            <ListItemText primary={recipe.name} />
            <Switch checked={isChecked} color="primary" onChange={handleChange} />
        </ListItem>
    );
}

export default RecipesListItem;