import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
const Form = (props) => {
    const {albums, setAlbums} = props
    const [albumName, setAlbumName] = useState('')
    const [genre, setGenre] = useState('')
    const [releaseYear, setReleaseYear] = useState('2022-02-22')
    const [isExplicit, setIsExplicit] = useState(false)



    const submitHandler = (e) => {
        e.preventDefault();
        const newAlbum = {albumName, genre, releaseYear, isExplicit, id:uuidv4()} // creating a new album object
        setAlbums([...albums, newAlbum]) // updating the albums array state using the setter function and spread operator 
        console.log(newAlbum);
        setAlbumName('')
        setGenre('')
        setReleaseYear('2022-02-22')
    }


    return (
        <div>
            <h2>Album Form</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Album Name</label>
                    <input type="text" onChange={(e) => setAlbumName(e.target.value)} name='albumName' value={albumName}/>
                </div>
                <div>
                    <label>Genre</label>
                    <input type="text" onChange={(e) => setGenre(e.target.value)} name='genre' value={genre}/>
                </div>
                <div>
                    <label>Release Year</label>
                    <input type="date" onChange={(e) => setReleaseYear(e.target.value)} name='releaseYear' value={releaseYear}/>
                </div>
                <div>
                    <label>Explicit</label>
                    <label>Yes</label>
                    <input type="checkbox" onChange={(e) => setIsExplicit(!isExplicit)} checked={isExplicit}/>
                </div>
                <button>Add</button>
            </form>
        </div>
)}

export default Form;