import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class CatIndex extends Component {
  render() {
    return (
      <>
   
      
  
      <div className="body-container">
        
      <h3>Meet Your Me-atch!</h3>
      
          {this.props.cats && this.props.cats.map(cat => {
          return ( 
        
            <p key={cat.id}>
              <NavLink to={`/catshow/${cat.id}`}>
                {cat.name}
              </NavLink>
            </p>
            
            
          )
          
        })}
     
      </div>
      
      </>
      
    )
  }
}
export default CatIndex