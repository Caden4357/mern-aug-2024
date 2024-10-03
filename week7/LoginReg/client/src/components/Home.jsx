import axios from 'axios';
import React, {useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {userContext} from '../context/userContext'
const Home = (props) => {
    const {user, setUser} = useContext(userContext)
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
    return (
        <div>
            <button onClick={logout}>Logout</button>
            <h1>Welcome {user.username}</h1>
        </div>
)}

export default Home;