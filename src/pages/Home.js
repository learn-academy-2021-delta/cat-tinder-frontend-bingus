import React, { Component } from 'react'


class Home extends Component {
  render() {
    return (
      <div className="body-container">
        <h3 className="home">I am the Home</h3>
        <div id="button-container">
        <button onClick={this.props.alert}>Sign up Today!</button>
        <br />
        <br />
        <button onClick={this.props.alert}>Log in</button>
        </div>
      </div>
    )
  }
}
export default Home