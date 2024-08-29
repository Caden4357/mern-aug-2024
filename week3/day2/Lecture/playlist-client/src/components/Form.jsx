import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const today = new Date();
const formattedDate = today.toISOString().split('T')[0];


const Form = (props) => {
    const {albums, setAlbums} = props
    const [albumName, setAlbumName] = useState('')
    const [genre, setGenre] = useState('')
    const [releaseYear, setReleaseYear] = useState(formattedDate)
    const [isExplicit, setIsExplicit] = useState(false)



    const submitHandler = (e) => {
        e.preventDefault();
        const newAlbum = {albumName, genre, releaseYear, isExplicit, id:uuidv4()} // creating a new album object
        setAlbums([...albums, newAlbum]) // updating the albums array state using the setter function and spread operator 
        console.log(newAlbum);

        // reseting the form inputs to clear out the form or reset to default values 
        setAlbumName('') 
        setGenre('')
        setReleaseYear(formattedDate)
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