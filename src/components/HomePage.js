import React from 'react';
import { Link } from 'react-router-dom';
import './HomePageStyle.css';
import HeroImg from '../components/assets/hero.jpg';


const HomePage = () => {
  return (
    <div>
       <div className="hero">
       <div className='mask'>
            <img className='hero-img' src={HeroImg} alt='HeroImg' />
        </div>
        <div className='content'>
            <h1>&#123; . . . .&#125;</h1>
            <h2 id='sub-title'>Front-End Developer.</h2>
            <div>
                <Link to='/Projects'
                className='button'>Projects</Link>
                <Link to='/Contact'
                className='button button-light'>Contact</Link>
            </div>

        </div>
        </div>
    </div>

  )
}

export default HomePage