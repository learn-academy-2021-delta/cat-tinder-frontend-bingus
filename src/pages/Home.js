import React, { Component } from 'react'


class Home extends Component {
  render() {
    return (
      <div id="home-container">
        <h3 className="home">I am the Home</h3>
        <button onClick={this.props.alert}>Sign up Today!</button>
        <button onClick={this.props.alert}>Log in</button>
      </div>
    )
  }
}
export default Home