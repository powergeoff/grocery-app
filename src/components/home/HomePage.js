import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import HomeListItem from './HomeListItem';
import {getGroceryByID} from '../../app/appDataScripts';
import Footer from '../shared/Footer';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: 60
    },
    formControl: {
        marginLeft: theme.spacing(5),
        marginTop: theme.spacing(2),
        minWidth: 200,
      }
  }));
function HomePage(){
    const classes = useStyles();

    const groceryIDs = useSelector((state) => state.groceryList);
    let groceryList = [];

    groceryIDs.forEach(id => groceryList.push(getGroceryByID(id)));

    groceryList.sort(function (a, b) {
        return a.zone - b.zone;
    });

    return (
        <div className={classes.root}>
          <Grid container spacing={3}>
          <Grid item xs={12} component="nav" aria-label="main mailbox folders">
            {
              groceryList.map((item) => 
              <HomeListItem grocery={item} key={item.id}/>
              )
            }
            </Grid>
          </Grid>
          <Footer />
        </div>
    );
}

export default HomePage;