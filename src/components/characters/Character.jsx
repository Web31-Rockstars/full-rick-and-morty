import React, {useEffect, useState} from 'react';
import Axios from 'axios';

const Character= ({url}) => {
    const [data, setData] =  useState({});
 
    useEffect(()=>{
        Axios.get(url)
        .then(response=>{
            console.log(response);
            setData(response.data);
        })
        .catch(err=>{console.log(err)})
    }
        ,[])

    return (
    <> 
    <article>
        <img src={data.image} alt={data.name} />
    <p>{data.name}</p>
    </article>
    </>
    )
}

export default Character