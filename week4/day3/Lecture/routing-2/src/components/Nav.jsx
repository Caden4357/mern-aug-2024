import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Nav = (props) => {
    return (
        <header>
            <nav className='d-flex justify-content-between p-4 align-items-center'>
                <h1>Routing Part 2</h1>
                <div className='w-25 d-flex gap-4 align-items-center'>
                    <Link to={'#'}>Placeholder</Link>
                    <Link to={'#'}>Placeholder</Link>
                    <Link to={'#'}>Placeholder</Link>
                </div>
            </nav>
        </header>
    )
}

export default Nav;