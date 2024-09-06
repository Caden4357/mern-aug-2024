import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../data';

const ViewProduct = (props) => {
    const [product, setProduct] = useState({})
    console.log(useParams());
    const { id } = useParams()
    console.log(id);


    // useEffect to call our db passing in the id from useParams to get one product by id 
    // this is view one or read one of crud 
    useEffect(() => {
        // axios call
        const productToDisplay = products.filter((prod) => id == prod.id)
        setProduct(productToDisplay[0])
    }, [])

    
    return (
        <div>
            <h2>Name: {product.name}</h2>
            <p>Price: {product.price}</p>
            <p>Category: {product.category}</p>
            <p>Rating: {product.rating}</p>
        </div>
    )
}

export default ViewProduct;