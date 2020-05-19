import React from 'react';
import {useParams} from 'react-router-dom'


const Character= () => {
    return (
    <> Character {useParams().character}</>
    )
}

export default Character