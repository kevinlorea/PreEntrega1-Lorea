import {useContext} from "react";

import {CartContext} from "../../context/CartContext";
import {Link} from "react-router-dom";


import "./Carrito.css";

const Carrito = () => {
  const { carrito, borrarCarrito, borrarProducto, totalPrecio } =
    useContext(CartContext);

  if (carrito.length === 0) {
    return (
      <div className="carrito-vacio">
        <h2>El carrito esta vacio</h2>
        <Link className="button" to="/">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="carrito">
      <ul className="lista">
        {carrito.map((producto) => (
          <li className="producto" key={producto.id}>
            <img
              className="imagen"
              src={producto.imagen}
              alt={producto.nombre}
            />
            <p className="texto nombre">{producto.nombre}</p>
            <p className="texto">Cantidad: {producto.cantidad}</p>
            <p className="texto">Precio unitario: ${producto.precio}</p>
            <button className="btn-borrar"
              onClick={() => borrarProducto(producto.id)}>
              Borrar producto
              </button>
          </li>
        ))}
      </ul>
      <h3>Total a pagar: ${totalPrecio()}</h3>
      <button className="btn-vaciar" onClick={borrarCarrito}>
        <p>Vaciar carrito</p>   
      </button>
      <Link to="/checkout">
        <button className="btn-seguir">Continuar con la compra</button>
      </Link>
    </div>
  );
};
export default Carrito;

