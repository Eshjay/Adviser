import React, {useState, useEffect} from 'react';
import Hero from '../Hero/Hero';
import axios from 'axios';

function HeroDisplay() {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState([true])
  
    useEffect(() =>{
        const fetchItems = async () =>{
          const result = await axios(
            `https://api.adviceslip.com/advice`
          )
          console.log(result.data)
          setItems(result.data)
          setIsLoading(false)
        }
        fetchItems()
      }, [])

    return (
        <div>
            <Hero isLoading={isLoading} items={items} />
        </div>
    )
}

export default HeroDisplay
