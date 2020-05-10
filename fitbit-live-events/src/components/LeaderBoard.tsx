import React from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      background: 'white',
      color: 'black',
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&': {
        backgroundColor: 'white',
        color: 'black',
      },
    },
  }),
)(TableRow);

function createData(name: number, calories: string, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, 'Jake', 6.0, 24, 4.0),
  createData(2, 'Tom', 9.0, 37, 4.3),
  createData(3, 'Linda', 16.0, 24, 6.0),
  createData(4, 'Maya', 3.7, 67, 4.3),
  createData(5, 'Alex', 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function LeaderBoard() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Place</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Position</StyledTableCell>
            <StyledTableCell align="right">Time</StyledTableCell>
            <StyledTableCell align="right">Avg speed</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name} style={{color: 'black'}}>
              <StyledTableCell component="th" scope="row" style={{color: 'black'}}>
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right" style={{color: 'black'}}>{row.calories}</StyledTableCell>
              <StyledTableCell align="right" style={{color: 'black'}}>{row.fat}</StyledTableCell>
              <StyledTableCell align="right" style={{color: 'black'}}>{row.carbs}</StyledTableCell>
              <StyledTableCell align="right" style={{color: 'black'}}>{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
