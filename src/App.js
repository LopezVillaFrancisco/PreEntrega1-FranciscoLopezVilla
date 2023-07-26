import NavBar from "./components/NavBar/NavBar"; 
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import CheckOut from "./components/CheckOut/CheckOut";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { CartPorvider } from "./context/CartContext";
import "bulma/css/bulma.css"

function App () {
    return (
        <div>
            <BrowserRouter>
               <CartPorvider>
                <NavBar/>  
                <Routes>
                    <Route path="/" element={<ItemListContainer/>}/>
                    <Route path="/categoria/:categoriaId" element={<ItemListContainer/>}/> 
                    <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/checkout" element={<CheckOut/>}/>
                    <Route path="*" element={<h1>404 NOT FOUND</h1>}/> 
                </Routes>
                </CartPorvider>
            </BrowserRouter>         
        </div>
    )
}
export default App;