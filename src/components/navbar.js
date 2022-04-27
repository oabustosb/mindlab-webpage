import * as React from 'react'
import {Link} from 'gatsby'
import {navbar, navmenu, navitem, navimg} from './navbar.module.css'
import {StaticImage} from 'gatsby-plugin-image'

const NavBar = () => {
    return (
      <div className={navbar}>
        <StaticImage alt="MindLab Logo" src="../images/mindlab-logo-simple.png" 
        height={80} width={173} objectFit="contain" className={navimg}/>  
        <ul className={navmenu}>
          <li><Link className={navitem} to="/">Home</Link></li> 
          <li><Link className={navitem} to="/research">Research</Link></li> 
          <li><Link className={navitem} to="/people">People</Link></li> 
          <li><Link className={navitem} to="/courses">Courses</Link></li> 
          <li><Link className={navitem} to="/publicat">Publications</Link></li> 
          <li><Link className={navitem} to="/contact">Contact</Link> </li>
        </ul>  
      </div>
    )
}

export default NavBar