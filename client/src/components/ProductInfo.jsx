//src/components/ProductInfo.js
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {fetchProductInfo} from '../actions/productInfo'
import {Link} from 'react-router-dom'
import catalogue from './Pictures'

class ProductInfo extends PureComponent {
  
  componentWillMount() {
    this.props.fetchProductInfo(this.props.match.params.id)
  }

  render() {
    const {product} = this.props
      return (
        <div>
            <img src={catalogue[Math.floor(Math.random() * catalogue.length)]} alt="productdetails"></img>

            <h2> { product.title } </h2>
            <p> { product.description}</p>
            <p> { product.price } &euro; </p>
            
            
            <h2> Contact details: </h2>
            <p> { product.email } </p>
        </div>
      )
    }
}

const mapStateToProps = (state) => ({
    product : state.productInfo
})

export default connect (mapStateToProps, {fetchProductInfo}) (ProductInfo)