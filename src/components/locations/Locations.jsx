import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import Character from '../characters/Character';

const Locations = () => {
  const [data,setData]= useState({results:[{residents:[""]}]});
  useEffect(()=>{
      Axios.get('https://rickandmortyapi.com/api/location/')
      .then(response=>{
          console.log(response.data);
          setData(response.data);
      })
      .catch(err=>{console.log(err)})
  }
  
  
  ,[])

  return (
      <> 
      {data.results.map((location, index)=>{
          return(
          <article key={index}>
              <p>dimension: {location.dimension}</p><p>name: {location.name}</p><p>Type: {location.type}</p>
              <p>Includes characters: </p>
              <div className="characterList">
                {
                  location.residents.map((resident, index) => (
                    <Character key={index} url={resident} />
                  ))
                }
              </div>
          </article>)
      })}
      </>
  )
}

export default Locations