import React,{ Component } from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color:black;
`;



class StationEventLog extends Component {
    state = {
      comments : [ ]
    }
  
   componentDidMount(){
      Axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(res => {
        console.log(res);
        this.setState({
          id: this.state.id ,
          comments: res.data.slice(0,6)
        })
          }) 
    }
  
   renderTableData() {
   
      return this.state.comments.map((comment, index) => {
          //destructuring
         

         return (
            <tr key={comment.id}>
               <td>{comment.id}</td>
               <td>{comment.name}</td>
               <td>{comment.email}</td>
            </tr>
         )
      })
   }
  
   renderTableHeader() {
      let header = Object.keys(this.state.comments)
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }
  
   render() {
      return (
         <div>
            <h1 id='title'>StationEventLog </h1>
            <table id='comments'>
               <tbody>
               <tr>
        <th>Id</th>
        <th>Comment Name</th>
        <th>comment Name</th>
      
      </tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }
  }
  export default StationEventLog









const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      { date: '2020-01-05', customerId: '11091700', amount: 3 },
      { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    

      <React.Fragment>

    <TableRow className={classes.root}>

      <TableCell>
        <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </TableCell>
      <TableCell component="th" scope="row">
        {row.name}
      </TableCell>
      <TableCell align="right" >{row.calories}</TableCell>
      <TableCell align="right">{row.fat}</TableCell>
      <TableCell align="right">{row.carbs}</TableCell>
      <TableCell align="right">{row.protein}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box margin={1}>
            <Typography variant="h6" gutterBottom component="div">
              History
            </Typography>
            <Table size="small" aria-label="purchases">
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Customer</TableCell>
                  <TableCell align="right">Amount</TableCell>
                  <TableCell align="right">Total price ($)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {row.history.map((historyRow) => (
                  <TableRow key={historyRow.date}>
                    <TableCell component="th" scope="row">
                      {historyRow.date}
                    </TableCell>
                    <TableCell>{historyRow.customerId}</TableCell>
                    <TableCell align="right">{historyRow.amount}</TableCell>
                    <TableCell align="right">
                      {Math.round(historyRow.amount * row.price * 100) / 100}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  </React.Fragment>

 
    
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
  createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];

export default function Stationeventlog() {
  


  return (
    <div>
      <Title><h1>station Event Log Reports</h1></Title>
      
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    
  );


  
}