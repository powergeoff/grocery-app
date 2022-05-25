import React, { useState, useEffect } from 'react';
import * as groceryApi from "../../api/groceriesApi";
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles({
    root: {
      //width: '100%',
    },
    container: {
      maxHeight: 610,
    },
    button: {
        padding: 0
    }
  });

function AdminTablePage() {
    const classes = useStyles();
    const [items, setItems] = useState(null);

    useEffect(() => {
      if (items == null) {
        groceryApi.getGroceries().then(data => {
        data.sort(function (a, b) {
            return a.zone - b.zone;
        });
        setItems(data)
        });
      }

      return function cleanup() {
        console.log('clean up clean up! everybody\'s job is cleanup!');
      };

    }, [items, setItems]);

    function deleteItem(id) {
      groceryApi.deleteGrocery(id).then(() => {
        groceryApi.getGroceries().then(data => {
          data.sort(function (a, b) {
              return a.zone - b.zone;
          });
          setItems(data)
        });
      });
    }

    return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>Grocery Items</TableCell>
                <TableCell align="right">ID</TableCell>
                <TableCell align="right">Zone</TableCell>
                <TableCell align="right">Store</TableCell>
                <TableCell align="right">Staple</TableCell>
                <TableCell align="right">Edit</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items && items.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.id}</TableCell>
                  <TableCell align="right">{row.zone}</TableCell>
                  <TableCell align="right">{row.store === 0 ? "Stop & Shop" : "Whole Foods"}</TableCell>
                  <TableCell align="right">{row.isStaple ? <CheckIcon /> : ''}</TableCell>
                  <TableCell className={classes.button} align="right"><Button className={classes.button} href={"/create/" + row.id}><EditIcon className={classes.button} /></Button></TableCell>
                  <TableCell className={classes.button} align="right"><Button className={classes.button} onClick={() => deleteItem(row.id)}><DeleteIcon className={classes.button} /></Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      );

    
}

export default AdminTablePage;