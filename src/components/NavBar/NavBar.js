import CardWidget from "../CartWidget/CardWidget";

function NavBar(){
    return (

        <nav>
            <h3>Arigato</h3>
            <div>
                <button>Platos</button>
                <button>Delivery</button>
                <button>Ubicación</button>
            </div>
            <CardWidget/>
        </nav>
    )
}

export default NavBar;