import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const NewAlbumForm = (props) => {
    const {albums, setAlbums} = props
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [releaseYear, setReleaseYear] = useState(2024)
    const [isExplicit, setIsExplicit] = useState(false)
    const [errors, setErrors] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();
        const newAlbum = {
            title,
            artist,
            releaseYear,
            isExplicit
        }
        axios.post('http://localhost:8000/api/v1/albums', newAlbum) // The 2nd arg in any post, put & patch will always become the body of the request object in the controller (req.body)
            .then((res) => {
                console.log(res.data);
                setAlbums([...albums, res.data])
                setTitle('')
                setArtist('')
                setReleaseYear(2024)
                setIsExplicit(false)
                navigate('/')
            })
            .catch((err) => {
                setErrors(err.response.data.errors);
            })
    }
    return (
        <div>
            <h1>Album Form</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Album Title...' />
                    {
                        errors.title?
                        <p className='text-danger'>{errors.title.message}</p>:
                        null
                    }
                </div>
                <div>
                    <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} placeholder='Artist...' />
                    {
                        errors.artist?
                        <p className='text-danger'>{errors.artist.message}</p>:
                        null
                    }
                </div>
                <div>
                    <input type="text" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} placeholder='Release Year...' />
                    {
                        errors.releaseYear?
                        <p className='text-danger'>{errors.releaseYear.message}</p>:
                        null
                    }
                </div>
                <div>
                    <label>Explicit? </label>
                    <input type="checkbox" checked={isExplicit} onChange={() => setIsExplicit(!isExplicit)} placeholder='IsExplicit...' />
                    {
                        errors.isExplicit?
                        <p className='text-danger'>{errors.isExplicit.message}</p>:
                        null
                    }
                </div>
                <button>Add</button>
            </form>
        </div>
    )
}

export default NewAlbumForm;