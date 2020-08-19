import React from 'react';
import { Twitter } from 'react-sharingbuttons';
import 'react-sharingbuttons/dist/main.css';
import './Hero.css';
import '../Search/Search.css';
import Spinner from '../Spinner/Spinner';

const Hero = ({items, isLoading, refreshPage}) =>  {
        refreshPage = () => {
            window.location.reload(false);
        }
// const url = items.slip.advice;
const text = 'Tweet';
const shareText = '';

    return isLoading ? (<Spinner />) : (
        <div className='hero'>
            <div className='hero-text'>
                <p className='hero-date'>
                   General Advice
                </p>
                <h2 className='hero-advice'>
                    {items.slip.advice}
                </h2>
                <div className='share-btn'>
                    <Twitter text={text} url={items.slip.advice} shareText={shareText} />
                </div>
                <button onClick={refreshPage} className='search-btn random-advice'>
                    New advice
                </button>
            </div>
        </div>
        )
    }
export default Hero
