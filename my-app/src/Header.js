import React from 'react';
import './Header.css';
import logo from './Assets/logo.png';
import video from './Assets/video.mp4';

function Header() {
    return (
        <header className='header'>
            <nav className='navbar navbar-expand-lg'>
                <div className='container-fluid'></div>
                <img src={logo} alt='image' className='logo navbar-brand'></img>
                <button
                    className='navbar-toggler btn ms-auto'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarnav'
                    aria-controls='navbarnav'
                    aria-label='toggle navigation'
                    aria-expanded='false'>
                    <i className='fas fa-bars'></i>
                </button>
                <div className=' collapse navbar-collapse ' id='navbarnav' >
                    <ul className='navbar-nav ms-auto'>
                        <li className="nav-item"><a href='#' className='navlink'>Home</a></li>
                        <li className="nav-item"><a href='#' className='navlink'>Tafseer</a></li>
                        <li className="nav-item"><a href='#' className='navlink'>Listen</a></li>
                        <li className="nav-item"><a href='#' className='navlink'>cantact</a></li>
                        <li className="nav-item"><a href='#' className='navlink'>Support</a></li>
                    </ul>
                </div>
            </nav>

            <video
                autoPlay
                loop
                muted
                playsInline >

                <source src={video} type='video/mp4'></source>

            </video>
            <div className='overlay'></div>
            <br className='white'></br>
            


            <h1>“Illuminate Your Heart with Qur’an”</h1>

        </header>
    )
}
export default Header;