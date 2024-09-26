import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Register = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    
    // ! Todo - submit handler
    return (
        <form>
            <h1>Register</h1>
            <div>
                <label>Username</label>
                <input type="text" onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <label>Confirm Password</label>
                <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <Link to="/">Already have an account?</Link>
        </form>
)}

export default Register;