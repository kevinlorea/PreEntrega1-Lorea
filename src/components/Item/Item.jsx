import { Link } from "react-router-dom";

import "./Item.css";

const Item = ({ producto }) => {
    <div>
      <img className="image" src={producto.imagen} alt={producto.nombre} />
      <p className="titulo"> {producto.nombre} </p>
      <p className="precio">$ {producto.precio} </p>
      <a href="" className="link">Ver detalles</a>
      <Link to={`/detalle/${producto.id}`} className="link">Ver detalles</Link>
    </div>

};
export default Item;
