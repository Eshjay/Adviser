import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Search from './Components/Search/Search';
import HeroDisplay from './Components/HeroDisplay/HeroDisplay';



const App = () => {
    return (
      <div>
       <Header />
       <HeroDisplay />
       <Search />
      </div>
    );
  }


export default App;
