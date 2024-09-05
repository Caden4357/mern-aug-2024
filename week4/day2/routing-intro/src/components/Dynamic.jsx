import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
const Dynamic = (props) => {
    console.log('PARAMS: ', useParams());
    const {stackId, color} = useParams();
    return (
        <div>
            <h2 style={{background:color}}>You typed in {stackId}</h2>
        </div>
)}

export default Dynamic;