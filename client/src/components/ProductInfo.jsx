//src/components/ProductInfo.js
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {fetchProductInfo} from '../actions/productInfo'
import {Link} from 'react-router-dom'

class ProductInfo extends PureComponent {
  
  componentWillMount() {
    this.props.fetchProductInfo(this.props.match.params.id)
  }

  render() {
    const {product} = this.props
      return (
        <div>
            <h1> { product.title } </h1>
            <p>&euro; { product.price }.00 </p>
            <p> { product.description}</p>
            <img src={ product.picture } alt="productdetails"></img>
            <h2> Contact details: </h2>
            <p> { product.email } </p>
            <p> { product.phone } </p>
            <Link to={ `/products` }><button>Go back to Ducky Ads List</button></Link>
        </div>
      )
    }
}

const mapStateToProps = function (state) {
  return {
    product : state.productInfo
  }
}

export default connect (mapStateToProps, {fetchProductInfo}) (ProductInfo)