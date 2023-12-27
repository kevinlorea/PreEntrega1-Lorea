const ItemDetail = ({ producto }) => {
  return (
    <div>
      <img src={producto.imagen} alt="" />
      <p>{producto.nombre}</p>
      <p>${producto.precio}</p>
    </div>
  )
}
export default ItemDetail