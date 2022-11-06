import React from "react";
import CartWidget from "./CartWidget";
import Imagen from "../imagen/header.png";
import {Link,NavLink} from 'react-router-dom';
const NavBar= () =>{
    return(
       <nav>
            <div></div>
            <img src={Imagen} className="imagen"/>
            <ul>
                <NavLink to='/' className='space'>Inicio</NavLink>
            </ul>
            <Link to='/cart'>
        <CartWidget/>
        </Link>
        </nav>
    )
}
export default NavBar;
