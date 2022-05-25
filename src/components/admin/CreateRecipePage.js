import { makeStyles } from '@material-ui/core/styles';
import { TextField, Grid, Paper, Button, FormControl } from '@material-ui/core';
//import AllItemsPage from '../all-items/AllItemsPage';

//*************THIS PAGE NEEDS HELP!! */
//import allData from '../../data.json';
//const GROCERIES = allData["groceries"];

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    formControl: {
        marginLeft: theme.spacing(5),
        marginTop: theme.spacing(2),
        //margin: theme.spacing(2),
        //minWidth: 200,
      },
      groceryList: {
        maxHeight: 200,
        overflowX: 'hidden',
        overflowY: 'auto',
        marginLeft: theme.spacing(5),
        marginTop: theme.spacing(2),
        //margin: theme.spacing(2),
        //minWidth: 200
      },
  }));

function CreateRecipePage(props) {
    const id = null;
    const item = {};
    const classes = useStyles();

    //function handleItemChange(groceryId){
        //console.dir(groceryId);
    //}
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}><h2 className={classes.formControl}>{id !== null ? "Edit " : "New "}Recipe - Work In Progress</h2>
                </Grid>

                <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>Left</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>Right</Paper>
        </Grid>
                <form onSubmit={console.log('submit')} autoComplete="off" >

                    <Grid item xs={12}>
                        <TextField className={classes.formControl} label="Name" variant="outlined" name="name" onChange={console.log('name change')} value={item.name === undefined ? "" : item.name} />
                    </Grid>

                    <Grid item xs={12}>
                        <Paper className={classes.groceryList} variant="outlined">
                            {/* <AllItemsPage  masterList={GROCERIES} handleChangeMaster={handleItemChange}/> */}
                        </Paper>
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

export default CreateRecipePage;