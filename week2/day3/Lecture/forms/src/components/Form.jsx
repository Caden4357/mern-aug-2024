import React, {useState} from 'react';

const Form = (props) => {
    const [albumName, setAlbumName] = useState('')
    const [genre, setGenre] = useState('')
    const [releaseYear, setReleaseYear] = useState('2022-02-22')
    const [recommended, setRecommended] = useState("")
    const [isExplicit, setIsExplicit] = useState(true)


    const submitHandler = (e) => {
        e.preventDefault();
        const newAlbum = {albumName, genre, releaseYear}
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
                {/* <div>
                    <p>Favorite fruit</p>
                    <label>Bananas</label>
                    <input type="radio" name="recommended" value={"Bananas"} onClick={(e) => setRecommended(e.target.value)}/>
                    <label>Blueberries</label>
                    <input type="radio" name="recommended" value={"Blueberries"} onClick={(e) => setRecommended(e.target.value)}/>
                    <label>Strawberries</label>
                    <input type="radio" name="recommended" value={"Strawberries"} onClick={(e) => setRecommended(e.target.value)}/>
                </div> */}
                <div>
                    <label>Explicit</label>
                    <label>Yes</label>
                    <input type="checkbox" onChange={(e) => setIsExplicit(!isExplicit)} checked={isExplicit}/>
                </div>
                <button>Add</button>
                {/* OR */}
                {/* <input type="submit" value="Add" /> */}
            </form>
        </div>
)}

export default Form;