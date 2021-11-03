import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import CatIndex from './pages/CatIndex'
import Home from './pages/Home'
import CatShow from './pages/CatShow'
import CatNew from './pages/CatNew'
import CatEdit from './pages/CatEdit'
import NotFound from './pages/NotFound' 
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cats: []
    }

  }

  componentDidMount(){
    this.readCat()
  }

  readCat = () => {
    fetch("http://localhost:3000/cats")
    .then(response => response.json())
    .then(catArray => this.setState({cats: catArray}))
    .catch(errors => (console.log(errors)))
  }
 
  createNewCat = (newCat) => {
    fetch("http://localhost:3000/cats", {
      body: JSON.stringify(newCat),
      headers: {
        "Content-Type" : "application/json"
      },
      method: "POST"  
    })
    .then(response => response.json())
    .then(payload => this.readCat())
    .catch(errors => (console.log(errors)))
  }

  updateCat = (updatedInfo, id) => {
  fetch(`http://localhost:3000/cats/${id}`, {
    body: JSON.stringify(updatedInfo),
    headers: {
      "Content-Type" : "application/json"
    },
    method: "PATCH"
  })
  .then(response => response.json())
  .then(payload => this.readCat())
  .then(errors => (console.log(errors)))
}


  render() {

    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
           path="/catindex" 
           render={(props) => <CatIndex cats={this.state.cats} />} 
          />
          <Route
            path="/catshow/:id"
            render={(props) => {
              let id = props.match.params.id
              let cat = this.state.cats.find(c => c.id === +id)
              return <CatShow cat={cat} />
            }}
          />
          <Route path="/catnew" render={(props) => <CatNew createNewCat={this.createNewCat} />} />
          <Route path="/catedit/:id" render={(props) => {
            let id = props.match.params.id
            let cat = this.state.cats.find(c => c.id === +id)
            return<CatEdit cat={cat} updateCat={this.updateCat}/>
          }}
          />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;