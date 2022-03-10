import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const API_URL = "https://pokeapi.co/api/v2/pokemon"

export default function Home(){

  //TODO
  //input field to search pokemons
  //1. Add an input field
  //2. Save the search term in useState
  //3. Filter the array based on the search term to check the names that include it
  //4. Map filtered array

  const [ pokemons, setPokemons ] = useState([])
  const [ searchTerm, setSearchTerm ] = useState("")

  console.log("search term", searchTerm)

  const fetchPokemons = async () => {
    const response = await axios.get(API_URL)
    console.log("response", response)
    setPokemons(response.data.results)
    // console.log(pokemons) //returns previous state
  }

  useEffect(() => {
    fetchPokemons()
  }, [])

  // console.log("pokemons", pokemons) //always console.log in the body

  const filteredPokemons = [...pokemons].filter(poke => poke.name.includes(searchTerm))
  console.log("filter", filteredPokemons)

  return(
    <div>
      <h1>Homepage</h1>
      Search: <input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>
      {!pokemons 
        ? "Loading"
        : filteredPokemons.map(pokemon => {
          return (
            <div key={pokemon.name}>
              <Link to={`/details/${pokemon.name}`}>
                <h3>{pokemon.name}</h3>
              </Link>
            </div>
          )
        })}
    </div>
  )
}