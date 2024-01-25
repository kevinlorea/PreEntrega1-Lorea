import {Link} from "react-router-dom";

import "./Item.css";

const Item = ({ producto }) => {
  return (
    <div className="item">
      <Link to={`/detalle/${producto.id}`} className="link-img"><img className="image" src={producto.imagen} alt={producto.nombre} /></Link>
      <p className="titulo"> {producto.nombre} </p>
      <p className="detalle-art">{producto.descripcion}</p>
      <p className="precio">$ {producto.precio} </p>
      <Link to={`/detalle/${producto.id}`} className="link">Ver más</Link>
    </div>
  );
};
export default Item;

