import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import FlashOnIcon from '@material-ui/icons/FlashOn';


import AdminLinks from './AdminLinks';
import OneTimeItem from './OneTimeItem';

export default function Header() {

  const [isExpanded, setExpanded] = React.useState(false);

  const handleClick = () => {
    isExpanded ? setExpanded(false) : setExpanded(true);
  };

  
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

              <IconButton aria-label="all-items" onClick={handleClick}>
                <FlashOnIcon style={{ fontSize: 40 }} />
              </IconButton>

            <AdminLinks />
          </Toolbar>

          <OneTimeItem handleClick={handleClick} expandedItem={isExpanded} />
        </AppBar>
      <Toolbar />
      </Grid>

    </Grid>
  );
}