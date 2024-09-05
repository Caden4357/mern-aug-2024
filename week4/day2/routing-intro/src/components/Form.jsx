import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
const Form = (props) => {
    const navigate = useNavigate();

    const [number, setNumber] = useState(0);
    const [color, setColor] = useState('')


    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/m/${number}/${color}`)
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="number" onChange={(e) => setNumber(e.target.value)} />
                <input type="text" name="" id="" onChange={(e) => setColor(e.target.value)} />
                <button>Submit</button>
            </form>
        </div>
)}

export default Form;