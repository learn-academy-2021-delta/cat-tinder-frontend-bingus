import React, { Component } from 'react'

class CatShow extends Component {
  render() {
    return (
      <>
      <h3 id="showheader">I am the Cat Show</h3>
      <div className="body-container">
        
      
     
        { this.props.cat &&
          <>
          <p>{this.props.cat.name}</p>
          <p>{this.props.cat.age}</p>
          <p>{this.props.cat.enjoys}</p>   
      </>    
 }
 
      </div>
      </>
    )
  }
}
export default CatShow