import React, {useState} from 'react';

const Player = props => {
    const {name, position, number, points} = props
    console.log("PROPS: ",props.name);

    return (
        <div className='border player'>
            <h4>Name: {name} </h4>
            <h4>Position: {position}</h4>
            <h4>Jersey Number: {number}</h4>
            <h4>Points: {points}</h4>
        </div>
)}

export default Player;