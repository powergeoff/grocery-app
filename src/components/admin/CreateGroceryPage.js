import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Grid, Checkbox, Button, FormControl, Select, InputLabel} from '@material-ui/core';
import * as groceryApi from "../../api/groceriesApi";
import * as storeApi from "../../api/storeApi";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    checkBox: {
        float: 'right'
    },
    formControl: {
        marginLeft: theme.spacing(5),
        marginTop: theme.spacing(2),
        //margin: theme.spacing(2),
        minWidth: 200,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
  }));

function CreateGroceryPage(props){
    const classes = useStyles();

    const id = props.match.params.id ? parseInt(props.match.params.id) : null;
    const [item, setItem] = useState({});
    const [stores, setStores] = useState([]);
    
    useEffect(() => {
        if (id !== null) {
            groceryApi.getGrocery(id).then(data => setItem(data));
        }
        if (!stores.length) {
            storeApi.getStores().then(data => setStores(data));
        }
        
    }, [setItem, id, stores, setStores]);

    function handleSubmit() {
        
        const data = {
            "id": id,
            "name": item.name,
            "store": item.store == null ? 0 : parseInt(item.store),
            "isStaple": item.isStaple,
            "zone": parseInt(item.zone)
        };
        groceryApi.saveGrocery(data).then(data => {
            console.dir(data); 
        });
    }

    function handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setItem({...item, [name]: value});
    }

    return (
    <div className={classes.root}>
        <Grid container spacing={3}>
        <Grid item xs={12}><h2 className={classes.formControl}>{id !== null ? "Edit " : "New "}Item</h2>
        </Grid>
        <form onSubmit={handleSubmit} autoComplete="off" >
        
            <Grid item xs={12}>
                <TextField className={classes.formControl} label="Name" variant="outlined" name="name" onChange={handleInputChange} value={item.name === undefined ? "" : item.name} />
            </Grid>

            <Grid item xs={12}>
                <FormControl className={classes.formControl} variant="outlined" >
                    <InputLabel htmlFor="outlined-age-native-simple">Store</InputLabel>
                    <Select
                    native
                    value={item.store === undefined ? "" : item.store}
                    onChange={handleInputChange}
                    label="Store"
                    inputProps={{
                        name: 'store',
                        id: 'outlined-age-native-simple',
                    }}
                    >
                    <option aria-label="None" value="" />
                    {stores.map((option) => (
                        <option key={option.id} value={option.id}>
                        {option.name}
                        </option>
                    ))}
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={12}>
                <TextField className={classes.formControl} label="Zone" variant="outlined" name="zone" onChange={handleInputChange} value={item.zone === undefined ? "" : item.zone} />
            </Grid>

            <Grid item xs={12}>      
                <FormControl className={classes.formControl} variant="outlined" >
                    <div>
                        Is Staple:
                    <Checkbox color="primary" checked={item.isStaple === undefined ? false : item.isStaple} onChange={handleInputChange} name="isStaple" />
                    </div>
                </FormControl>
            </Grid>

            <Grid item xs={12}>
                <FormControl className={classes.formControl} variant="outlined" >
                    <Button type="submit" value="Submit" variant="contained" color="primary" >Submit</Button>
                </FormControl>
            </Grid>
        
    </form>
    </Grid>
    </div>
    );
}

export default CreateGroceryPage;