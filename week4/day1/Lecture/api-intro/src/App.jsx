import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'



function App() {
  const [people, setPeople] = useState([]) // this is for getting the first 10 or 20 star wars characters
  const [searched, setSearched] = useState(null) // this is for the search results from the form 

  const [search, setSearch] = useState('')



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
  // useEffect(() => {
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
  // }, [])



  const submitHandler = (e) => {
    e.preventDefault();
    let searchString = `https://swapi.dev/api/people/?search=${search}`
    axios.get(searchString)
      .then((response) => {
        setSearched(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <>
      <h1>Intro To API's</h1>
      {/* <button onClick={callSwapi}>Call SWAPI</button> */}
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Search for a person" onChange={(e) => setSearch(e.target.value)} value={search}/>
        <button>Search</button>
      </form>
      {
        searched && searched.map((character) => (
          <div>
            <p>{character.name}</p>
          </div>
        ))
      }
      {/* {
        people.map((person, idx) => (
          <div key={idx}>
            <p>{person.name}</p>
          </div>
        ))
      } */}
    </>
  )
}

export default App
