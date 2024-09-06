import React, {useState} from 'react';
import Ad from '../components/Ad';
import Products from '../components/Products';
import { products } from '../../data';

const Homepage = (props) => {
    return (
        <div className='d-flex gap-2'>
            <Ad/>
            <Products products={products}/>
        </div>
)}

export default Homepage;