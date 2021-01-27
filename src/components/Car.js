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

        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            <h1>{car.Name}</h1>
            <div style={{display: 'flex', width: '500px', height: '200px', flexWrap: 'wrap'}}>
                {Object.keys(car).map(key => {
                    return (
                    <Chip title={key} value={car[key]}/>
                )})}
            </div>
            
        </div>
    )
}

export default Car