import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SaveIcon from '@material-ui/icons/Save';
import ClearIcon from '@material-ui/icons/Clear';
import { useDispatch, useSelector } from 'react-redux';
import { selectGroceryList, removeAll } from '../../app/groceryListSlice';
import { selectRecipeList, removeAllRecipes } from '../../app/recipeListSlice';
import { saveStorage, clearStorage } from '../../app/localStorage'; 

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    color: '#fff',
    background: '#3f51b5'
  },
});

export default function Footer() {
  const classes = useStyles();


  const dispatch = useDispatch();
  const groceryState = useSelector(selectGroceryList);
  const recipeState = useSelector(selectRecipeList);
  
  const handleSaveClick = () => {
    saveStorage(groceryState, 0);
    saveStorage(recipeState, 1)
  }

  const handleClearAllClick = () => {
    dispatch(removeAll([]));
    dispatch(removeAllRecipes([]));
    clearStorage();
  }
  return (
    <BottomNavigation
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction onClick={handleSaveClick} label="Save" icon={<SaveIcon />} />
      <BottomNavigationAction onClick={handleClearAllClick} label="Clear All" icon={<ClearIcon />} />
    </BottomNavigation>
  );
}