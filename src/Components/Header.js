import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <h2>Contact</h2>
            <Link to={"/"}>Home</Link>
            <Link to="/addUser">addUser</Link>
            <Link to="/editUser">editUser</Link>
            <Link to="/userinfo">userinfo</Link>
            <Link to="/About">About</Link>
        </div>
    )
}

export default Header
