import * as React from 'react'
import {cardLabel, card} from './home-card.module.css'

const Card = ( { cardTitle, children } ) => {  
    return (
      <div className={card}>
        <div className={cardLabel}>
          <p>{cardTitle}</p>              
        </div>
        {children}
      </div>
    )
  
}

export default Card