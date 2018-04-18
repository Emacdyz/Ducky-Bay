//src/components/productslist.js
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {fetchAllProducts, createAd} from '../actions/products'
import {Link} from 'react-router-dom'
import PostNewAd from './PostNewAd'
import './ProductsList.css'
 
class ProductsList extends PureComponent {

  componentWillMount() {
    this.props.fetchAllProducts()
  }

  createAd = (product) => {
    this.props.createAd(product)
  }

  render () {
    const {products} = this.props
    return (
      <div className="content">
      <div className="list">
        <h2>Ducky Ads</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            { products.map(product => (<tr key={product.id}>
              <td>
                <Link to={ `/products/${product.id}` }>{product.title}</Link>
              </td>
              <td>&euro; {product.price}.00</td>
              <td><Link to={ `/products/${product.id}` }><button>See More</button></Link></td>
            </tr> ) )}
          </tbody>
				</table>
      </div>
      <div className="post">  
        <h2>Create your ad</h2>
        <PostNewAd onSubmit={this.createAd} />
      </div>
      </div>
    )
  }
} 

const mapStateToProps = function (state) {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, {fetchAllProducts, createAd}) (ProductsList)

