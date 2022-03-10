import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export default function Home(){

  const API_URL = "https://pokeapi.co/api/v2/pokemon"

  const [ pokemons, setPokemons ] = useState([])

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

  return(
    <div>
      <h1>Homepage</h1>
      {!pokemons 
        ? "Loading"
        : pokemons.map(pokemon => {
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