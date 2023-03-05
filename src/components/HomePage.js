import React from 'react';
import './HomePageStyle.css';
import HeroImg from '../components/assets/hero.jpg';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
       <div className="hero">
       <div className='mask'>
            <img className='hero-img' src={HeroImg} alt='HeroImg' />
        </div>
        <div className='content'>
            <p>Hi, I'M A FREELANCE</p>
            <h1>React Developer.</h1>
            <div>
                <Link to='/project'
                className='button'>Projects</Link>
                <Link to='/project'
                className='button button-light'>Contact</Link>
            </div>

        </div>
        </div>
    </div>

  )
}

export default HomePage