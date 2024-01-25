import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div id="navbar">
      <Link to="/">
        <div className="brand">
            <p>digital$pawn</p>
        </div>
      </Link>
        <ul>
            <li>
            <Link to="/categorias/productos">ÚLTIMOS INGRESOS</Link>
            </li>
            <li>
            <Link to="/categorias/ofertas">OFERTAS DE LA SEMANA</Link>
            </li>
        </ul>
        <CartWidget/>
    </div>

  )
}

export default NavBar


