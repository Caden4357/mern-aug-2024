import axios from 'axios';
import React, {useContext, useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../context/userContext';
const Home = (props) => {
    const {user, setUser} = useContext(userContext)
    const [name, setName] = useState('')
    const [cuisine, setCuisine] = useState('')
    const [location, setLocation] = useState('')
    const [rating, setRating] = useState('')
    const [errors, setErrors] = useState({})
    const [restaurants, setRestaurants] = useState([])
    const navigate = useNavigate()
    const logout = () => {
        axios.post('http://localhost:8000/api/logout', {}, {withCredentials:true})
            .then(() => {
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const newRestaurant = {name, cuisine, location, rating}
        axios.post('http://localhost:8000/api/restaurants', newRestaurant, {withCredentials:true})
            .then(() => {
                // navigate('/home')
            })
            .catch((err) => {
                setErrors(err.response.data.errors)
            })
    }


    useEffect(() => {
        axios.get('http://localhost:8000/api/restaurants', {withCredentials:true})
            .then((res) => {
                setRestaurants(res.data);
            })
            .catch((err) => {
                console.log(err);
            }
        )
    }, [])

    return (
        <div>
            <button onClick={logout}>Logout</button>
            <h1>Welcome {user.username}</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Name</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} />
                    {errors.name ? <p>{errors.name.message}</p> : ''}
                </div>
                <div>
                    <label>Cuisine</label>
                    <input type="text" onChange={(e) => setCuisine(e.target.value)} />
                    {errors.cuisine ? <p>{errors.cuisine.message}</p> : ''}
                </div>
                <div>
                    <label>Location</label>
                    <input type="text" onChange={(e) => setLocation(e.target.value)} />
                    {errors.location ? <p>{errors.location.message}</p> : ''}
                </div>
                <div>
                    <label>Rating</label>
                    <input type="number" onChange={(e) => setRating(e.target.value)} />
                    {errors.rating ? <p>{errors.rating.message}</p> : ''}
                </div>
                <button type="submit">Add Restaurant</button>
            </form>
            {
                restaurants.map((restaurant, idx) => {
                    return (
                        <div key={idx}>
                            <h3>{restaurant.name}</h3>
                            <p>Cuisine: {restaurant.cuisine}</p>
                            <p>Location: {restaurant.location}</p>
                            <p>Rating: {restaurant.rating}</p>
                            <p>Posted By: {restaurant.userId.username}</p>
                        </div>
                    )
                })
            }
        </div>
)}

export default Home;