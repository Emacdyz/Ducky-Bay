import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import HomePage from './components/HomePage'
import ProductInfo from './components/ProductInfo'
import PostNewAd from './components/PostNewAd'
import TopBar from './components/layout/TopBar'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
          <Route exact path="/home" component={TopBar} />
          </nav>
          
          <main>
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/products/:id" component={ProductInfo} />
            <Route exact path="/upload" component={PostNewAd} />
            <Route exact path="/" render={ () => <Redirect to="/products" /> } />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
