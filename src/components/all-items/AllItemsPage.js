import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import AllItemsListItem from './AllItemsListItem';
import {getGroceries} from '../../app/appDataScripts';
import Footer from '../shared/Footer';
const GROCERIES = getGroceries();


const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
      marginBottom: 60
    }
  }));

function AllItemsPage() {
  const classes = useStyles();
  GROCERIES.sort(function (a, b) {
    return a.zone - b.zone;
  });
  return (
  <div className={classes.root}>
    <Grid container spacing={3}>
      <Grid item xs={12} component="nav" aria-label="main mailbox folders">
        {
          GROCERIES.map((item) => 
              <AllItemsListItem key={item.name} groceryItem={item} />
          )
        }
        </Grid>
    </Grid>
    <Footer />
  </div>
  );
}

export default AllItemsPage;