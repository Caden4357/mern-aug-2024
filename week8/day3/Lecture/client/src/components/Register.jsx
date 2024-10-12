import React, {useState, useContext} from 'react';
import axios from 'axios';

const Register = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        const user = {
            username: username,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }
        axios.post('http://127.0.0.1:5000/api/register', JSON.stringify(user),{ headers: { 'Content-Type': 'application/json' } })
            .then((res) => {
                console.log(res);
            })  
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <form onSubmit={submitHandler}>
            <h2>Register</h2>
            <div>
                <label>Username:</label>
                <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Email:</label>
                <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="text" name="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type="text" name="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <button>Register</button>
        </form>
)}

export default Register;