import React, {useState} from 'react';

const Display = (props) => {
    const {albums} = props
    return (
        <div>
            <h1>Albums</h1>
            {
                albums.map( (album) => (
                    <div className='border border-2 border-primary' key={album.id}>
                        <p>ID: {album.id}</p>
                        <p>Album Name: {album.albumName}</p>
                        <p>Genre: {album.genre}</p>
                        <p>Release Year: {album.releaseYear}</p>
                    </div>
                ) )
            }
        </div>
)}

export default Display;