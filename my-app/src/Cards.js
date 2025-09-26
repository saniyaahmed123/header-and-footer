import React from 'react';
import './Card.css';
import tasbeeh from './Assets/tasbeeh.png';
import quran from './Assets/quran.png';
import dua from './Assets/dua1.png';

function Cards(){
    return(
        <div className='cards'>
            <div className='card'>
            <img src={tasbeeh} alt='quran' className= ' tasbeeh card-img-top' /> 
            <div className='card-body'>
                <h5 className='card-title'>Tasbeeh Counter</h5>
                <p className='card-text'>Count your dhikr easily with our digital tasbeeh counter. Keep track of your daily zikr effortlessly.</p>
                <a href='#' className='btn btn-dark '>Count Now</a>
            </div>
                </div>      
            <div className='card'>
            <img src={quran} alt='quran' className= 'card-img-top' /> 
            <div className='card-body'>
                <h5 className='card-title'>Recite Quran</h5>
                <p className='card-text'>Read and listen to the Holy Quran with translation and tafseer anytime,anywhere</p>
                <a href='#' className='btn btn-dark '>Recite Now</a>
            </div>
                </div>      
            <div className='card'>
            <img src={dua} alt='dua' className= ' dua card-img-top' /> 
            <div className='card-body'>
                <h5 className='card-title'>Daily Duas</h5>
                <p className='card-text'>Learn and memorize authentic duas for every occasion. Bring daily blessings into your life.</p>
                <a href='#' className='btn btn-dark '>Learn Duas</a>
            </div>
                </div>      


        </div>
    )
}

export default Cards;