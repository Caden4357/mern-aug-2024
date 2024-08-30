import React, { useState } from 'react';

const Display = (props) => {
    const { albums, setAlbums } = props


    const toggleListen = (id) => {
        const updatedList = albums.map((album) => 
            id === album.id ? {...album, listened:!album.listened} : album
            // if(id === album.id){
            //     album.listened = !album.listened
            // }
        )
        console.log(updatedList);
        setAlbums(updatedList)
    }

    const deleteAlbum = (id) => {
        const filteredList = albums.filter((album) => album.id !== id)
        setAlbums(filteredList)
    }

    return (
        <>
            <h2>Albums</h2>
            <div className='album-container'>
                {
                    albums.map((album) => (
                        <div className={`album-box ${album.listened? 'listened' : ''}`} key={album.id}>
                            <p>Album Name: {album.albumName}</p>
                            <p>Genre: {album.genre}</p>
                            <p>Release Year: {album.releaseYear}</p>
                            {
                                album.isExplicit ?
                                    <p>Parental Advisory</p> :
                                    null
                            }
                            <label>Listened?</label>
                            <input type="checkbox" name="isExplicit" checked={album.listened} onClick={() => toggleListen(album.id)} />
                            <button onClick={() => deleteAlbum(album.id)}>Delete</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Display;