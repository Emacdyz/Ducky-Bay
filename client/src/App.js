import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import HomePage from './components/HomePage'
import ProductInfo from './components/ProductInfo'
import PostNewAd from './components/PostNewAd'

class App extends Component {
  render() {
    return (
      <Router>
        
          <div className="app">
            <Route exact path="/products" component={HomePage} />
            <Route exact path="/products/:id" component={ProductInfo} />
            <Route exact path="/upload" component={PostNewAd} />
            <Route exact path="/" render={ () => <Redirect to="/products" /> } />
          </div>
        
      </Router>
    );
  }
}

export default App;
