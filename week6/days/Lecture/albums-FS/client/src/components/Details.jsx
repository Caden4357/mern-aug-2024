import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
const Details = (props) => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [album, setAlbum] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/v1/albums/${id}`)
            .then((res) => {
                setAlbum(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const deleteAlbum = (id) => {
        axios.delete(`http://localhost:8000/api/v1/albums/${id}`)
            .then(() => navigate('/'))
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <h2>Title: {album.title}</h2>
            <h2>Artist: {album.artist}</h2>
            <h2>Release Year: {album.releaseYear}</h2>
            {
                album.isExplicit? 
                <p>Explicit? Yes</p>:
                <p>Explicit? No</p>
            }
            <button onClick={() => deleteAlbum(album._id)}>Delete</button>
        </div>
)}

export default Details;