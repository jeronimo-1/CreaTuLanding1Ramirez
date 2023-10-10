import "./NavBar.css"
import CartWidget from "../CarWidget/CartWidget"
import logo from "./assets/logo.png"
const NavBar=() =>{
  

    return (
      <>
        <nav className="navBar">
          <div className="NameLogo">
            <h3>TiendaReact</h3>
            <img id="logo" src={logo} alt="logo tienda" />
            </div>
          <div className="navSeccion2">
            <button>camisetas</button>
            <button>buzos</button>
            <button>acesorios</button>
            <button>pantalones</button>
            <CartWidget/>
          </div>
          
        </nav>
      </>
    )
  }
  
  export default NavBar