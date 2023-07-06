import carrito from "./assets/carrito.svg"
import "./CardWidget.css"

function CardWidget(){
    return(
        <div className="Contenedor-carrito">
            <img src={carrito} alt="cart-widget" className="carrito" />
        </div>
    )
}

export default CardWidget;