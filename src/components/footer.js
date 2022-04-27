import * as React from 'react'
import {StaticImage} from 'gatsby-plugin-image'
import {footer, quote} from './footer.module.css'

const Footer = () => {
    return (
      <div className={footer}>        

        <div className={quote}>
          <p>“AI winters were not due to imagination traps, but due to lack of imaginations.
            Imaginations bring order out of chaos. Deep learning with deep imagination is the 
            road map to AI springs and AI autumns.” – <span>Amit Ray</span></p>
        </div>
      </div>
    )
}

export default Footer