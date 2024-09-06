import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Products = (props) => {
    const { products } = props
    return (
        <>
            <div className='border border-2 border-secondary w-75 d-flex justify-content-between flex-wrap'>
                {
                    products.map((prod) => (
                        <div className='border border-2 border-success' key={prod.id}>
                            <Link to={`/product/${prod.id}`}>Name: {prod.name}</Link>
                            <p>Price: {prod.price}</p>
                            <p>Category: {prod.category}</p>
                            <p>Rating: {prod.rating}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Products;