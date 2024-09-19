import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <header>
            <nav>
                <h1>Record Dot Com</h1>
                <Link to={'/new/album'}>Post An Album</Link>
                <br />
                <Link to={'/'}>Home</Link>
            </nav>
        </header>
)}

export default Nav;