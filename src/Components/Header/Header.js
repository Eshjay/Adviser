import React from 'react';
import 'react-sharingbuttons/dist/main.css';

import twitter from './twitter.png'
import './Header.css';

const Header = () => {

    const url = 'https://twitter.com/holusholah'; 
    const text = 'Olushola Abiodun'

    return (
        <header>
            <nav>
                <h2 className='nav-item'>
                    Adv<span className='nav-two'>iser</span>
                </h2>
                    <p><span className='by'>By</span><a href={url}>
                        <button>
                            <img 
                            src={twitter} 
                            alt='twitter @holushola'/>
                            {text}
                            </button>
                        </a>
                    </p>
            </nav>
        </header>
    )
}

export default Header
