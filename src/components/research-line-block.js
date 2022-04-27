import * as React from 'react'
import {researchLine} from './research-line-block.module.css'

const ResearchBlock = ( {children} ) => {
    return (
      <div className={researchLine}>
        {children}
      </div>
    )
}

export default ResearchBlock