import React, {useState} from 'react';
import { Link } from 'react-router-dom';
const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    // ! Todo - submit handler
    return (
        <form>
            <h1>Login</h1>
            <div>
                <label>Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <Link to="/register">Don't have an account?</Link>
        </form>
)}

export default Login;