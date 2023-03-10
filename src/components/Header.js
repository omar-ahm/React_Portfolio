import React, { useState } from 'react';
import './HeaderStyle.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () =>{
        if(window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        };
    };

    window.addEventListener('scroll', changeColor);

  return (
    <div className={color ? "header header-bg" :
    "header"}>
        <Link to='/React_Portfolio'>
            <h1 id='title'>Omar Ahmad</h1>
        </Link>
        <ul className={click ? "nav-menu active" : 
        "nav-menu"}>
            <li>
                <Link to='/React_Portfolio'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/Projects'>Projects</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
        {click ? (
            <FaTimes size={20} style={ { color:'#fff' } } />
            ) : (
            <FaBars size={20} style={ { color:'#fff' } } />
            )}
        </div>
    </div>
  )
}

export default Header