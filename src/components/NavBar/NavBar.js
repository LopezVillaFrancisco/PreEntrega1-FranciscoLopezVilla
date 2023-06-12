import CartWidget from "../CartWidget/CartWidget"

function NavBar(){
    return( 
        <nav className="navbar is-info" role="navigation" aria-label="main navigation"  >
        <div className="navbar-brand">
        <h3 className="title">Ecommerce</h3>
        </div>
        
        <div className="navbar-menu">
            <div className="navbar-start">
                <button className="button is-info is-medium">
                    Remeras
                </button> 
                <button className="button is-info is-medium ">
                    Buzos
                </button> 
                <button className="button is-info is-medium ">
                    Pantalones
                </button>
            </div> 
            <div className="navbar-ends">
                <CartWidget/>
            </div>
        </div>
    </nav>
    )
} 

export default NavBar
