import React from 'react'
import cars from '../cars.json'
// import material ui components here //
import Container from './Container'
import Paper from './Paper'
import Chip from './Chip'

// Container, Paper, Chip //

const Car = (props) => {

    const id = props.match.params.id
    const car = cars.find(car => {
        console.log(typeof id)
        return car.id === parseInt(id)})

    return (

        <div>
            <h1>{car.Name}</h1>
            <div>
                {Object.keys(car).map(key => {
                    return (
                    <Chip title={key} value={car[key]}/>
                )})}
            </div>
            
        </div>
    )
}

export default Car