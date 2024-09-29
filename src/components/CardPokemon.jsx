import React, { useState } from 'react'
import { dataPokemonAPI } from '../shared/data-api/dataPokemonAPI'

import './cssCardPokemon.css'

const CardPokemon = ({pokemon, contador}) => {
    const {name,url} = pokemon
    // console.log(name)
    // console.log(url)
    // console.log(contador)
    const [urlImagen, setUrlImagen] = useState(url)
    const { datos, loading } = dataPokemonAPI(urlImagen);
    console.log(datos);
  return (
    <div className='CP-card'>
        <p>{contador++} - {name}</p>
        {loading && <p>Cargando...</p>}
        <img src={datos?.sprites?.front_default ? datos.sprites.front_default : ''} alt={name} />
    </div>
  )
}

export default CardPokemon