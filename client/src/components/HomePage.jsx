//src/components/productslist.js
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {fetchAllProducts} from '../actions/products'
import {Link} from 'react-router-dom'
import BottomNav from './layout/BottomNav'

//Styling
import '../css/bottomNav.css'

class HomePage extends PureComponent {

  componentWillMount() {
    this.props.fetchAllProducts()
  }

  renderProduct = (product) => {

    return (
      <div key={product.id} className='product-card'>
        <img src={product.picture} alt="Not available for that product" />
        <h2>{product.price}  &euro; </h2>
        <p> {product.title} </p>
      </div>
    )
  }

  render () {
    const {products} = this.props

    if (products === null) return null

    return (
      
      <div className="list">  
      {products.map(product => this.renderProduct(product))}
        
      <BottomNav/>
      </div>
    )
  }
} 

const mapStateToProps = (state) => ({
  products: state.products
})

export default connect(mapStateToProps, {fetchAllProducts}) (HomePage)

