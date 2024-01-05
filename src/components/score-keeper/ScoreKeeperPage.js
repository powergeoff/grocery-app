import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: 60,
      marginLeft: 50
      //marginTop:50
    }
  }));


function ScoreKeeperPage(){

    const classes = useStyles();

    const [goodCount, setGoodCount] = useState(0);
    const [badCount, setBadCount] = useState(0);

    return (
    <div className={classes.root}>
        <Grid container spacing={3}>
            <div>
                <p>Parkway: {goodCount}</p>
                <button onClick={() => setGoodCount(goodCount + 1)}>Increment</button>
                <button onClick={() => setGoodCount(goodCount - 1)}>Decrement</button>
            </div>
            <div>
                <p>Bad Guys: {badCount}</p>
                <button onClick={() => setBadCount(badCount + 1)}>Increment</button>
                <button onClick={() => setBadCount(badCount - 1)}>Decrement</button>
            </div>
        </Grid>
    </div>
    );
}

export default ScoreKeeperPage;