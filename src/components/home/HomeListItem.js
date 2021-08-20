import React, { useState } from 'react';
import {ListItem, ListItemText } from '@material-ui/core';

function HomeListItem(props) {

    const [isStrikeThrough, setStrikeThrough] = useState(false);

    function handleClick() {
        isStrikeThrough ? setStrikeThrough(false) : setStrikeThrough(true);
    }

    return (
    <ListItem style={{textDecoration : isStrikeThrough ? 'line-through' : 'none'}} onClick={handleClick} button>
        <ListItemText primary={props.grocery.name} />
    </ListItem>
    );
}

export default HomeListItem;