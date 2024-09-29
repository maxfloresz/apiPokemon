import { Navigate, Route, Routes } from "react-router-dom"
import Dashboard from "../pages/dashboard/Dashboard"
import Pokemones from "../pages/pokemon/Pokemones"

const Rutas = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/pokemon" element={<Pokemones />} />
          <Route path="*" element={ <Navigate to="/" />} />
        </Routes>
    </>
  )
}

export default Rutas