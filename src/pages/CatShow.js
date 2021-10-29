import React, { Component } from 'react'

class CatShow extends Component {
  render() {
    return (
      <>
      <h3 id="showheader">I am the Cat Show</h3>
      <div className="body-container">
        
      
     
        { this.props.cat &&
          <>
          {/* <ul id="yucky"> */}
          <p id="show-name">{this.props.cat.name}</p>
          <p id="show-age">{this.props.cat.age}</p>
          <p id="show-enjoy">{this.props.cat.enjoys}</p>   
          {/* </ul> */}
      </>    
 }
 
      </div>
      </>
    )
  }
}
export default CatShow