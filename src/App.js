import React, {useEffect} from 'react';
import './App.css'; 
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/home/Home';
import Characters from './components/characters/Characters';

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
    <Router>
      <div className="App">
        <header className="App-header">
        Header
        </header>
        <main>
          <Switch>
            <Route exact path = '/'>
              <Home />
            </Route>

            <Route exact path='/characters'>
              <Characters />
            </Route>

          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
