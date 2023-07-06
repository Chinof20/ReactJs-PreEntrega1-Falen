import ItemCount from "../ItemCount/ItemCount";
const ItemDetail = ({id, name, imagen, category, description, price, stock}) => {
    return(
        <article>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={imagen} alt={name} />
            </picture>
            <section>
                <p>
                    Categoria: {category}
                </p>
                <p>
                    Descripción: {description}
                </p>

                <p>
                    Precio: ${price}
                </p>
            </section>
            <footer>
                <ItemCount initial={1} onAdd={(cantidad)=> console.log("Cantidad agregada ",cantidad)} />
            </footer>
        </article>
    )
}
export default ItemDetail;