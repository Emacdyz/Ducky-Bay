//src/components/productslist.js
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {fetchAllProducts} from '../actions/products'
import {Link} from 'react-router-dom'
 
class ProductsList extends PureComponent {
  

  componentWillMount() {
    this.props.fetchAllProducts()
  }

  render () {
    const {products} = this.props
    return (
      <div>
        <h1>Ducky Ads</h1>
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
    )
  }
} 

const mapStateToProps = function (state) {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, {fetchAllProducts}) (ProductsList)

