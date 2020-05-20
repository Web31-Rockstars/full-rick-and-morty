import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import Character from './Character';

const Characters = () => {
    const [data,setData]= useState({results:[]});
    useEffect(()=>{
        Axios.get('https://rickandmortyapi.com/api/character/')
        .then(response=>{
            console.log(response.data);
            setData(response.data);
        })
        .catch(err=>{console.log(err)})
    }
    
    
    ,[])

    return (
        <p> 
        {data.results.map(character=>{
            return(
            <article key={character.id}>
                <Character url={character.url} />
            </article>)
        })}
        </p>
    )
}

export default Characters