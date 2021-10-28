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
import cats from './mockCats';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cats: cats
    }
    this.handleClick = this.handleClick.bind(this);
  }

handleClick(){
console.log('alert test');
}

  render() {
    this.handleClick()
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} alert={this.handleClick()}/>
          <Route path="/catindex" component={CatIndex} />
          <Route path="/catshow" component={CatShow} />
          <Route path="/catnew" component={CatNew} />
          <Route path="/catedit" component={CatEdit}/>
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;