import React, { useState } from 'react';

const Display = (props) => {
    const { albums } = props
    return (
        <>
            <h2>Albums</h2>
            <div className='album-container'>
                {
                    albums.map((album) => (
                        <div className='album-box' key={album.id}>
                            <p>Album Name: {album.albumName}</p>
                            <p>Genre: {album.genre}</p>
                            <p>Release Year: {album.releaseYear}</p>
                            <p>ID: {album.id}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Display;