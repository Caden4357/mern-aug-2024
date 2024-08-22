import React, {useState} from 'react';

const Player = props => {
    const {name, position, number, points} = props
    const [currentPoints, setCurrentPoints] = useState(points)

    const freeThrow = () => {
        setCurrentPoints(currentPoints+1)
    }
    return (
        <div className='border player'>
            <h4>Name: {name} </h4>
            <h4>Position: {position}</h4>
            <h4>Jersey Number: {number}</h4>
            <h4>Points: {currentPoints}</h4>
            <button onClick={freeThrow}>Made A Free Throw</button>
        </div>
)}

export default Player;