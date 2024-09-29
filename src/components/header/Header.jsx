import './cssHeader.css'
import logoPokemin from '../../assets/img/name-pokemon-removebg-preview.png'
const Header = () => {
  return (
    <div className="header-h">
      <h1>Proyecto API</h1>
      <img src={logoPokemin} alt="pokemon-logo" />
    </div>
  )
}

export default Header