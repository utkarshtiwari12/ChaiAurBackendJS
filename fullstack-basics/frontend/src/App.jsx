import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {

  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((resp) => {
        setJokes(resp.data)
      })
      .catch((e) => {
        console.log(e)
      })
  })

  return (
    <>
      <h1>Full Stack Basics</h1>
      <p>JOKES : {jokes.length}</p>

      {
        jokes.map((joke) => (
          <div key={joke.id} style={{paddingBottom: 20}}>
            <h2>{joke.title}</h2>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
