import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import Character from '../characters/Character';

const Episodes = () => {
  const [data,setData]= useState({results:[{characters:[""]}]});
  useEffect(()=>{
      Axios.get('https://rickandmortyapi.com/api/episode/')
      .then(response=>{
          console.log(response.data);
          setData(response.data);
      })
      .catch(err=>{console.log(err)})
  }
  
  
  ,[])

  return (
      <> 
      {data.results.map((episode, index)=>{
          return(
          <article key={index}>
              <p>{episode.episode}</p><p>{episode.name}</p>
              <p>Includes characters: </p>
              <div className="characterList">
                {
                  episode.characters.map((character, index) => (
                    <Character key={index} url={character} />
                  ))
                }
              </div>
          </article>)
      })}
      </>
  )
}

export default Episodes