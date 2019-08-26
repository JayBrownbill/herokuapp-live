import React from 'react'
import { stack as Menu } from 'react-burger-menu';
import AnchorLink from 'react-anchor-link-smooth-scroll';



function Navbar() {

    return (
        <Menu>
        <ul className="navbar">
        <li className="bm-responsive"><AnchorLink offset='0' href='#landing-wrap'>HOME</AnchorLink></li>
        <li className="bm-responsive"><AnchorLink offset='0' href='#landing-wrap'>PRODUCT</AnchorLink></li>
        <li className="bm-responsive"><AnchorLink offset='0' href='#landing-wrap'>KICKSTART</AnchorLink></li>
        
        </ul>
        </Menu>
    )
}


export default Navbar;