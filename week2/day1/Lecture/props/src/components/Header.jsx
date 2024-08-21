import React from 'react';

const Header = (props) => {
    return (
        <header>
            <nav className='d-flex justify-content-between p-2 align-items-center'>
                <h1>Cohort Caden's NBA Fantasy team</h1>
                <ul className='d-flex justify-content-between w-25'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;