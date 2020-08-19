import React, { useState } from 'react';
import axios from 'axios';
import { Twitter } from 'react-sharingbuttons';
import 'react-sharingbuttons/dist/main.css';
import './Search.css';
import '../AdvicesList/AdvicesList.css'
import '../Advices/Advices.css'

function Search() {
    const[searchQuery, setSearchQuery] = useState('');
    const[advices, setAdvices] = useState({ slips: [] });
    const[found, setFound] = useState(true);
    const text = 'Tweet';
    const shareText = '';
    const onInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const noResMsg = "No advice slips found matching that search term.";

    let API_URL = `https://api.adviceslip.com/advice/search/`;

    const fetchAdvices = async () => {
        
      const result = await axios.get(`${API_URL}${searchQuery}`);
        console.log(result.data);
        // setAdvices(result.data);
       if (result.data.message && result.data.message.text === noResMsg) {
           setFound(false);
       } else {
           setFound(true);
       }
       setAdvices(result.data);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        fetchAdvices();
    }

    return (
        <div>
            
            <section>
                <form className='search-box' onSubmit={onSubmitHandler}>
                        <input
                         
                        type='search'
                        placeholder='Search for advice e.g love'
                        value={searchQuery}
                        onChange={onInputChange}
                        />
                        <button className='search-btn' type='submit'>Search</button>
                </form>
                <div className='adviceList'>
                    { found ?
                        advices.slips.map((advice, id) => {
                            return (
                                <div key={id}>
                                    <div className='advice-card'>
                                        <h2>{advice.advice}</h2>
                                    
                                       <p> <Twitter text={text} 
                                            url={advice.advice} 
                                            shareText={shareText} />
                                        </p>
                                    </div>
                                </div>
                            );
                        })  : ( <div className='advice-card'>
                                    <h2>No advice found matching {searchQuery}.</h2>
                                </div>)
                    } 
                </div>
            </section>

        </div>
    ) 
}

export default Search
