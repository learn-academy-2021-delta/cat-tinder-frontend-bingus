import React, { Component } from 'react'

class CatShow extends Component {
  render() {
    return (
      <>
      
      <div className="body-container">
        <ul>
      <h3>I am the Cat Show</h3>
     
        { this.props.cat &&
          <>
          <ul>
          <p>{this.props.cat.name}</p>
          <p>{this.props.cat.age}</p>
          <p>{this.props.cat.enjoys}</p>
          </ul>
          
      </>
      
 }
 </ul>
      </div>
      </>
    )
  }
}
export default CatShow