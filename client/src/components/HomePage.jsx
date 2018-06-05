//src/components/productslist.js
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {fetchAllProducts} from '../actions/products'
import {Link} from 'react-router-dom'
import BottomNav from './layout/BottomNav'

//Styling
import '../css/layout.css'
import '../css/homePage.css'

class HomePage extends PureComponent {

  componentWillMount() {
    this.props.fetchAllProducts()
  }

  renderProduct = (product) => {

    return (
        <div key={product.id} className='product-card'>
        <Link to={ `/products/:id`}>
          <img src={product.picture} alt="Not available for that product" />
          <div className='card-text'>
          <h2>{product.price}  &euro; </h2>
          <p> {product.title} </p>
          </div>
        </Link>
        </div>
      
    )
  }

  render () {
    const {products} = this.props

    if (products === null) return null

    return (
      
        <div className="list">  
        {products.map(product => this.renderProduct(product))}
        </div>

    )
  }
} 

const mapStateToProps = (state) => ({
  products: state.products
})

export default connect(mapStateToProps, {fetchAllProducts}) (HomePage)

