import React, { Component } from 'react'
import oopCat from '../assets/404cat.png'

class NotFound extends Component {
  render() {
    return (
      <div className="page-body">
        <h3>Ooops, no cats here!</h3>
      <img src={oopCat} alt="404 error cat yelling at food bowl" className="oopCat"></img>
      </div>
    )
  }
}
export default NotFound