import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'



function App() {
  const [people, setPeople] = useState([])
  // const callSwapi = () => {
  //   axios.get('https://swapi.dev/api/people')
  //     .then((response) => {
  //       const results = response.data.results
  //       console.log(response.data.results);
  //       setPeople(results)
  //       console.log(response.data.next);
  //       // clear the error state here
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       // setError state here
  //     })
  // }

  // useEffect
  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then((response) => {
        const results = response.data.results
        console.log(response.data.results);
        setPeople(results)
        console.log(response.data.next);
        // clear the error state here
      })
      .catch((error) => {
        console.log(error);
        // setError state here
      })
  }, [])


  return (
    <>
      <h1>Intro To API's</h1>
      {/* <button onClick={callSwapi}>Call SWAPI</button> */}
      {
        people.map((person, idx) => (
          <div key={idx}>
            <p>{person.name}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
