import * as React from 'react';
import { TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import { Accordion } from "@material-ui/core";
import { AccordionSummary } from "@material-ui/core";
import { AccordionDetails } from "@material-ui/core";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';


import { useDispatch } from 'react-redux';
import { addItem } from "../../app/oneTimeListSlice";


const useStyles = makeStyles({
    root: {
        top: '75px',
        width: '100%',
        position: 'fixed'
    },
    accordion: {
        display: 'none'
    }
});

const OneTimeItem = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [oneTimeItem, setOneTimeItem] = React.useState('');

    const handleChange = (event) => {
        setOneTimeItem(event.target.value);
    }

    const handleClick = () => {
        //console.log(oneTimeItem)
        dispatch(addItem(oneTimeItem))
        setOneTimeItem('');
        props.handleClick();
    }

    return (
        <div className={classes.root}>
            <Accordion expanded={props.expandedItem} >
                <AccordionSummary className={classes.accordion} />
                <AccordionDetails>
                    <TextField id="standard-basic" variant="standard" onChange={handleChange} value={oneTimeItem} />
                    <IconButton aria-label="add" onClick={handleClick}>
                        <AddCircleIcon />
                    </IconButton>
                </AccordionDetails>
            </Accordion>
            
        </div>
    );
}

export default OneTimeItem;