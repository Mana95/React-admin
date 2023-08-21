import { Link, NavLink } from "react-router-dom";

const NavBar = ()=>{
    return (
        <nav>
           <ul>
          <li>
             <NavLink   to="/">Dashboard</NavLink>
          </li>
          <li>
             <NavLink  to="/example">About</NavLink>
          </li>
          <li>
             <NavLink  to="/products">Products</NavLink>
          </li>
       </ul>  
        </nav>
    )
}

export default NavBar;