import React, {useState} from 'react';
import Player from './Player';

const Bench = (props) => {
    return (
        <div>
            <h1>Players on the Bench</h1>
            <Player name={'Zion Williamson'} position={'Forward'} number={1} points={0}/>
        </div>
)}

export default Bench;