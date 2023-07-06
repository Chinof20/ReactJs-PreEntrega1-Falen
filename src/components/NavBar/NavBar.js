import { NavLink, Link } from "react-router-dom";
import CardWidget from "../CartWidget/CardWidget";
import "./NavBar.css"
import Logo from "../../img/arigato_2023.png"

function NavBar(){
    return (

        <nav className="nav">
            <Link to='/'>
                <img src={Logo} alt="Logo" className="logo"  />
            </Link>
            <div className="Secciones">
                <NavLink to={`/category/arroces`} className={ ({ isActive }) => isActive ? 'ActiveOption': 'Option'} > Arroces </NavLink>
                <NavLink to={`/category/fideos`} className={ ({ isActive }) => isActive ? 'ActiveOption': 'Option'} > Fideos </NavLink>
                <NavLink to={`/category/sopas`} className={ ({ isActive }) => isActive ? 'ActiveOption': 'Option'} > Sopas </NavLink>
            </div>
            <CardWidget/>
        </nav>
    )
}

export default NavBar;