import { NavLink } from 'react-router-dom'
import './cssSidebar.css'
const Sidebar = () => {
  return (
    <div className="sidebar-s">
      <nav className="menu">
        <div className="menu-link">
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/pokemon">Pokemones</NavLink>
        </div>
        <div className="menu-buton">
          <span>---</span>
          <span>---</span>
          <span>---</span>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar