import { useState } from "react";
import { dataPokemonAPI } from "../../shared/data-api/dataPokemonAPI";
import CardPokemon from "../../components/CardPokemon";

import "./cssDashboard.css";
import { HiOutlineArrowCircleLeft, HiOutlineArrowCircleRight } from "react-icons/hi";

const Dashboard = () => {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const { datos, loading } = dataPokemonAPI(url);
  console.log(datos);
  const [count, setCount] = useState(0);
  let countCadaUno = count;

  const handleSiguientePage = () => {
    setUrl(datos?.next);
    setCount(count + 20);
  };
  const handleAnteriorPage = () => {
    setUrl(datos?.previous);
    setCount(count - 20);
  };
  return (
    <div className="dashboard-container">
      {loading && <p>Cargando...</p>}

      <div className="pokemons-card">
        {datos?.results.map((pokemon) => (
          <CardPokemon
            pokemon={pokemon}
            key={pokemon.name}
            contador={++countCadaUno}
          />
        ))}
      </div>

      <div className="botones">
        <div className="botones2">
        {datos?.previous && (
          <button onClick={handleAnteriorPage}> <HiOutlineArrowCircleLeft /> <p>Anterior</p></button>
        )}
        {datos?.next && (
          <button onClick={handleSiguientePage}><p>Siguiente</p> <HiOutlineArrowCircleRight /></button>
        )}
        </div>
        <div className="paginacion">
          ({countCadaUno - 19} al {countCadaUno})
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
