import { Link } from "react-router-dom";
import "./Item.css"

const Item = ({id, name, imagen, price}) => {

    return (

        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>

            <picture>
                <img src={imagen} alt={name} className="ItemImg"/> 
            </picture>

            <section>
                <p className="Info">
                    Precio: ${price}
                </p>

            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`} className="Detalle" > Ver detalle </Link>
            </footer>

        </article>
    )
}

export default Item;

