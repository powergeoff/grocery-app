import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import RecipesListItem from './RecipesListItem';
import { getRecipies } from '../../app/appDataScripts';
import Footer from '../shared/Footer';

const RECIPES = getRecipies();

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: 60
    }
  }));


function RecipesPage(){

    const classes = useStyles();

    return (
    <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12} component="nav" aria-label="main mailbox folders">
                {RECIPES.map((item) => 
                    <RecipesListItem key={item.id} recipe={item}/>
                )}
            </Grid>
        </Grid>
        <Footer />
    </div>
    );
}

export default RecipesPage;