import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
const DisplayAll = (props) => {
    const navigate = useNavigate()

    const {albums, setAlbums} = props
    useEffect(() => {
        console.log('Display all useEffect running.');
        axios.get('http://localhost:8000/api/v1/albums')
            .then((res) => {
                setAlbums(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const deleteAlbum = (id) => {
        axios.delete(`http://localhost:8000/api/v1/albums/${id}`)
            .then(() => navigate('/'))
            .catch((err) => console.log(err))
        setAlbums(albums.filter(album => album._id !== id))
    }
    return (
        <div>
            <h1>Albums</h1>
            <div className='d-flex justify-content-between flex-wrap gap-5'>
                {
                    albums.map((album) => (
                        <div key={album._id} className='border border-2 border-primary p-2'>
                            <p>Album Name: {album.title}</p>
                            <p>Artist: {album.artist}</p>
                            <p>Release Year: {album.releaseYear}</p>
                            <Link to={`/edit/album/${album._id}`}>Edit</Link>
                            <br />
                            <Link to={`/details/album/${album._id}`}>Details</Link>
                            <button onClick={() => deleteAlbum(album._id)}>Delete</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default DisplayAll;