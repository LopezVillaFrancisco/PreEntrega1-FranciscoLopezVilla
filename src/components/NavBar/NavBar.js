import CartWidget from '../CartWidget/CartWidget' 
import { Link,NavLink } from "react-router-dom"

function NavBar(){
    return( 
        <nav className="navbar is-info" role="navigation" aria-label="main navigation"  >
        <div className="navbar-brand">
           <Link to="/">
            <h3 className="title">Venta de ropa</h3>
            </Link>
        </div>
        
        <div className="navbar-menu">
            <div className="navbar-start"> 
            <NavLink to={`/`}>
                <button className="button is-info is-medium ">
                    Home
                </button>
            </NavLink>
            <NavLink to={`categoria/remeras`}>
                <button className="button is-info is-medium ">
                    Remeras
                </button>
            </NavLink>
            <NavLink to={`categoria/buzos`}>
                <button className="button is-info is-medium ">
                    Buzos
                </button>
            </NavLink>
            <NavLink to={`categoria/pantalones`}>
                <button className="button is-info is-medium ">
                    Pantalones
                </button>
            </NavLink> 
            <NavLink to={`categoria/zapatillas`}>
                <button className="button is-info is-medium ">
                    Zapatillas
                </button>
            </NavLink>
            </div> 
            <div className="navbar-ends">
                <CartWidget/>
            </div>
        </div>
    </nav>
    )
} 

export default NavBar
