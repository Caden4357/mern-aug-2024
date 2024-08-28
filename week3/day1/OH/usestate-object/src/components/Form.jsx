import React, { useState } from 'react';

const Form = (props) => {
    const [album, setAlbum] = useState({
        albumName: '',
        genre: '',
        releaseYear: 2024,
        isExplicit: false
    })

    const handleAlbumForm = (e) => {
        const { name, value } = e.target
        if(name === 'isExplicit'){
            setAlbum({...album, isExplicit:!album.isExplicit})
        }else{
            setAlbum({ ...album, [e.target.name]: e.target.value })
        }
        // console.log("NAME: ", name);
        // console.log("VALUE: ", value);
    }


    const submitHandler = (e) => {
        e.preventDefault();
        // call the db with the album obj 
        
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Album Name:</label>
                    <input type="text" name='albumName' value={album.albumName} onChange={handleAlbumForm} />
                </div>
                <div>
                    <label>Genre:</label>
                    <input type="text" name='genre' value={album.genre} onChange={handleAlbumForm} />
                </div>
                <div>
                    <label>Release Year:</label>
                    <input type="number" name='releaseYear' value={album.releaseYear} onChange={handleAlbumForm} />
                </div>
                <div>
                    <label>Explicit:</label>
                    <input type="checkbox" name='isExplicit' value={album.isExplicit} onChange={handleAlbumForm} />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;