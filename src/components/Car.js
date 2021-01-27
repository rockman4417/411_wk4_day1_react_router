import React from 'react'
import cars from '../cars.json'
// import material ui components here //
import Container from './Container'
import Chip from './Chip'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
  }));

// Container, Paper, Chip //

const Car = (props) => {

    const classes = useStyles();

    const id = props.match.params.id
    const car = cars.find(car => {
        console.log(typeof id)
        return car.id === parseInt(id)})

    return (

        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            <Paper elevation={3} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '525px', height: '300px', marginTop: '50px'}}>
            <h1>{car.Name}</h1>
                <div style={{display: 'flex', width: '500px', height: '200px', flexWrap: 'wrap', justifyContent: "flex-start"}}>
                    {Object.keys(car).map(key => {
                        return (
                    <Chip title={key} value={car[key]}/>
                    )})}
                </div>
        </Paper>

        </div>
    )}

export default Car