import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
function App() {
  const [people, setPeople] = useState([]) // for star wars 
  const [poke, setPoke] = useState([])




  // handler function to call api using async/await
  // const callSwapi = async () => {
  //   try{
  //     // call our api
  //     const response = await axios.get('https://swapi.dev/api/people')
  //     const results = response.data.results
  //     console.log(results);
  //     setPeople(results)
  //   }
  //   catch(err){
  //     console.log(err);
  //   }
  // }

  // useEffect(() => {
  //   const callSwapi = async () => {
  //     try{
  //       // call our api
  //       const response = await axios.get('https://swapi.dev/api/people')
  //       const results = response.data.results
  //       console.log(results);
  //       setPeople(results)
  //     }
  //     catch(err){
  //       console.log(err);
  //     }
  //   }
  //   callSwapi()
  // }, [])


  useEffect(() => {
    const callApi = async () => {
      try{
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
        const {results} = response.data
        results.forEach(async pokeObj => {
          const pokemon = await axios.get(pokeObj.url)
          setPoke((prevState) => [...prevState, pokemon.data])
        });
      }
      catch(err) {
        console.log(err);
      }
    }
    callApi()
  }, [])


  return (
    <>
      <h1>API's with async/await</h1>
      {/* <button onClick={callSwapi}>Call SWAPI!</button> */}
      {
        poke.map((p, idx) => (
          <div key={idx}>
            <p>{p.name}</p>
            <img src={p.sprites.front_default} alt="Pokemon image" />
          </div>
        ))
      }
    </>
  )
}

export default App
