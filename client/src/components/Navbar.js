import React from 'react'
import { slide as Menu } from 'react-burger-menu';



function Navbar() {

    return (
        <Menu>
        <a className="navbar" href="index.html"> 
         Home
        </a>
        <a className="navbar" href="index.html"> 
        Product
       </a>
       <a className="navbar" href="index.html"> 
       Portfolio
      </a>
        </Menu>
    )
}


export default Navbar;