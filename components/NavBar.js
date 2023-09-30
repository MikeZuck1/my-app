import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => { 
  return (
    <div className='nav-bar'>
        <nav className='nav'>
            <ul style={{listStyleType: "none",}}>
                <div className='link-nav'>
                    <Link to="/" 
                    style={{ 
                        textDecoration: 'none',
                        color: '#000' 
                    }}>About</Link>
                </div>

                <div className='link-nav'> 
                    <Link to="/" 
                    style={{
                        textDecoration: 'none',
                        color: '#000'
                    }}>Experience</Link>
                </div>

                <div className='link-nav'>
                    <Link to="/" 
                    style={{
                        textDecoration: 'none',
                        color: '#000' 
                    }}>Contact</Link>
                </div>

                <a href='/' target='_blank'> 
                    <button className='btn-resume'>Resume</button>
                </a>
            </ul> 
        </nav> 
    </div>
  )
}

export default NavBar; 