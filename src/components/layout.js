import * as React from 'react'
import {container} from './layout.module.css'
import NavBar from './navbar'
import Footer from './footer'

const Layout = ( { pageTitle, children } ) => {
    return (
      <div>
        <title>MindLab - { pageTitle }</title>
        <nav><NavBar /></nav>
        <div className={container}>        
          <main>
            { children }
          </main>
        </div>
        <footer><Footer /></footer>
      </div>
    )
}

export default Layout