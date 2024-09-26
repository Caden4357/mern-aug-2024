import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Form from './Form';
const NewAlbumForm = (props) => {
    const { albums, setAlbums } = props
    const navigate = useNavigate()
    const [album, setAlbum] = useState({
        title:'',
        artist:'',
        releaseYear:2024,
        isExplicit:false
    })
    const [errors, setErrors] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/v1/albums', album) // The 2nd arg in any post, put & patch will always become the body of the request object in the controller (req.body)
            .then((res) => {
                console.log(res.data);
                setAlbums([...albums, res.data])
                setAlbum({
                    title:'',
                    artist:'',
                    releaseYear:2024,
                    isExplicit:false
                })
            })
            .catch((err) => {
                setErrors(err.response.data.errors);
            })
    }

    const changeHandler = (e) => {
        if(e.target.type === 'checkbox'){
            setAlbum({...album, isExplicit:!album.isExplicit})
        }else{
            const {name, value} = e.target
            setAlbum({...album, [name]:value})
        }
    }
    return (
        <div>
            <h1>Album Form</h1>
            <Form
                album={album}
                setAlbum={setAlbum}
                changeHandler={changeHandler}
                submitHandler={submitHandler}
                errors={errors}
            />
        </div>
    )
}

export default NewAlbumForm;
