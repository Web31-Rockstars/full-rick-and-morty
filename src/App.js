import React, {useEffect} from 'react';
import './App.css'; 
import axios from 'axios'

function App() {

useEffect(()=> {
  axios.get('https://rickandmortyapi.com/api/character/')
  .then(res => {
    console.log(res.data)
  })
  .catch(err => {
    console.log(err)
  })
}, []
)
  
  return (
    <div className="App">
      <header className="App-header">
      Header
      </header>
    </div>
  );
}

export default App;
