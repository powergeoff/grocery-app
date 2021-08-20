
import { Switch, ListItem, ListItemText } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
//import { createSelector } from 'reselect' //https://redux.js.org/tutorials/fundamentals/part-5-ui-react
import { add, remove, selectGroceryList } from "../../app/groceryListSlice";



function AllItemsListItem({ groceryItem }){
    const ID = groceryItem.id;
    const dispatch = useDispatch();
    const state = useSelector(selectGroceryList);
    const isChecked = state.find(id => id === ID) !== undefined ? true : false;
    const handleChange = (event) => {
        if (event.target.checked){
            dispatch(add(ID))
        }
        else {
            dispatch(remove(ID));
        }
      };

    return (
        <ListItem key={ID} button>
            <ListItemText primary={groceryItem.name} />
            <Switch checked={isChecked} color="primary" onChange={handleChange} />
        </ListItem>
    );
}

export default AllItemsListItem;