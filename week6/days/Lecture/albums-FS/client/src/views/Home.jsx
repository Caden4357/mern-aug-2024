import React, {useState} from 'react';
import DisplayAll from '../components/DisplayAll'
import NewAlbumForm from '../components/NewAlbumForm'

const Home = (props) => {
    const [albums, setAlbums] = useState([])
    return (
        <>
            <DisplayAll albums={albums} setAlbums={setAlbums}/>
            <NewAlbumForm albums={albums} setAlbums={setAlbums}/>
        </>
)}

export default Home;