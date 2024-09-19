import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
const EditAlbumForm = (props) => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [releaseYear, setReleaseYear] = useState(2024)
    const [isExplicit, setIsExplicit] = useState(false)
    const [errors, setErrors] = useState({})


    const getAlbum = () => {
        axios.get(`http://localhost:8000/api/v1/albums/${id}`)
        .then((res) => {
            setTitle(res.data.title);
            setArtist(res.data.artist);
            setReleaseYear(res.data.releaseYear)
            setIsExplicit(res.data.isExplicit)
        })
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        console.log('Running');
        getAlbum()
    }, [])



    const submitHandler = (e) => {
        e.preventDefault();
        const updatedAlbum = {
            title,
            artist,
            releaseYear,
            isExplicit
        }
        axios.put(`http://localhost:8000/api/v1/albums/${id}`, updatedAlbum) // The 2nd arg in any post, put & patch will always become the body of the request object in the controller (req.body)
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                setErrors(err.response.data.errors);
                getAlbum()
            })
    }
    return (
        <div>
            <h1>Album Form</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Album Title...' />
                    {
                        errors.title ?
                            <p className='text-danger'>{errors.title.message}</p> :
                            null
                    }
                </div>
                <div>
                    <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} placeholder='Artist...' />
                    {
                        errors.artist ?
                            <p className='text-danger'>{errors.artist.message}</p> :
                            null
                    }
                </div>
                <div>
                    <input type="text" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} placeholder='Release Year...' />
                    {
                        errors.releaseYear ?
                            <p className='text-danger'>{errors.releaseYear.message}</p> :
                            null
                    }
                </div>
                <div>
                    <label>Explicit? </label>
                    <input type="checkbox" checked={isExplicit} value={isExplicit} onChange={() => setIsExplicit(!isExplicit)} placeholder='IsExplicit...' />
                    {
                        errors.isExplicit ?
                            <p className='text-danger'>{errors.isExplicit.message}</p> :
                            null
                    }
                </div>
                <button>Update</button>
            </form>
        </div>
    )
}

export default EditAlbumForm;