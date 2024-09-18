import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const NewAlbumForm = (props) => {
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [releaseYear, setReleaseYear] = useState(2024)
    const [isExplicit, setIsExplicit] = useState(false)

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
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div>
            <h1>Album Form</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Album Title...' />
                </div>
                <div>
                    <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} placeholder='Artist...' />
                </div>
                <div>
                    <input type="text" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} placeholder='Release Year...' />
                </div>
                <div>
                    <label>Explicit? </label>
                    <input type="checkbox" value={isExplicit} onChange={() => setIsExplicit(!isExplicit)} placeholder='IsExplicit...' />
                </div>
                <button>Add</button>
            </form>
        </div>
    )
}

export default NewAlbumForm;