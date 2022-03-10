import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

export default function Details(){

  const [ pokemon, setPokemon ] = useState({})

  const params = useParams()
  console.log("params", params)

  const fetchPokemon = async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
    console.log("one pokemon", response)
    setPokemon(response.data)
  }

  useEffect(() => {
    fetchPokemon()
  }, [])

  return(
    <div>
      <h1>Details</h1>
      {!pokemon ? "Loading" : <div><h3>{pokemon.name}</h3></div>}
    </div>
  )
}