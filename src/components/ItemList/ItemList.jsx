import Item from "../Item/Item"
import "./ItemList.css"

const ItemList = ({productos}) => {
  return (
    <div className="item-list">
        {
            productos.map((producto) =>(
                <Item product={producto} key={producto.id} />
            ))
        }
      
    </div>
  )
}

export default ItemList
