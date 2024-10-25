import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'

const routePath = 'http://localhost:3001/'

function App() {
  const [message, setMessage] = useState('')

  useEffect(()=>{
    const getPath = async () => {
      const response = await axios.get(routePath)
      setMessage(response.data)
    }
    getPath()
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
