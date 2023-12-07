import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <div id="navbar">
        <div className="brand">
            <p>digitalSpawn</p>
        </div>
        <ul>
            <li><a href="#">Empeñar</a></li>
            <li><a href="#">Vender</a></li>
            <li><a href="#">Comprar</a></li>
            <li><a href="#">Ofertas Semanales</a></li>
        </ul>
        <CartWidget/>
    </div>

  )
}

export default NavBar
