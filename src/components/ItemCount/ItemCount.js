import { isEditable } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import "./ItemCount.css"

const ItemCount = ({stock, initial, onAdd}) => {
    const [cantidad, setCantidad] = useState(initial)
    const increment = () => {
        setCantidad(cantidad+1)
    }
    const decrement = () => {
        if(cantidad > 0){
            setCantidad(cantidad-1)
        }
    }

    return(
        <div className="Contador">
            <div className="contador-hijo">
                <button className="Button" onClick={decrement} > - </button>
                <h4 className="Number"> {cantidad} </h4>
                <button className="Button" onClick={increment} > + </button>
            </div>

            <div>
                <button className="Button" onClick={ ()=> onAdd(cantidad) }>
                    Agregar al carrito
                </button>
            </div>

        </div>
    )
}
export default ItemCount;