import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import Axios from 'axios';


const Character= () => {
    const [data, setData] =  useState({});
    const url= useParams().character;
    useEffect(()=>{
        Axios.get(`https://rickandmortyapi.com/api/character/${url}`)
        .then(response=>{
            console.log(response);
            setData(response.data);
        })
        .catch(err=>{console.log(err)})
    }
        ,[])

    return (
    <> Character {useParams().character}
    <article>
        <img src={data.image} alt={data.name} />
    <p>{data.name}</p>
    </article>
    </>
    )
}

export default Character