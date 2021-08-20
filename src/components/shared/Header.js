import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import AdminLinks from './AdminLinks';

import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import RestaurantIcon from '@material-ui/icons/Restaurant';

export default function Header() {
  
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
      <AppBar position="fixed">
        <Toolbar>
        
          <Link style={{textDecoration : 'none', margin: '5px'}} to="/">
            <IconButton aria-label="home">
              <HomeIcon style={{ fontSize: 40 }} />
            </IconButton>
          </Link>

          <Link style={{textDecoration : 'none', margin: '5px'}} to="/all">
            <IconButton aria-label="all-items">
              <LocalGroceryStoreIcon style={{ fontSize: 40 }} />
            </IconButton>
          </Link>

          <Link style={{textDecoration : 'none', margin: '5px'}} to="/recipes">
            <IconButton aria-label="all-items">
              <RestaurantIcon style={{ fontSize: 40 }} />
            </IconButton>
          </Link>

          <AdminLinks />
        </Toolbar>
      </AppBar>
      <Toolbar />
      </Grid>
    </Grid>
  );
}