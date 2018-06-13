//src/components/ProductInfo.js
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {fetchProductInfo} from '../actions/productInfo'
import catalogue from './Pictures'
import {Link} from 'react-router-dom'
import '../css/productPage.css'

class ProductInfo extends PureComponent {
  
  componentWillMount() {
    this.props.fetchProductInfo(this.props.match.params.id)
  }

  render() {
    const {product} = this.props
      return (
        <div className="product-info">
            <Link to={ `/products`}><img src={'./icons/GoBackWhite.svg'} alt="arrow" className="arrow"/></Link>
          
            <img src={catalogue[Math.floor(Math.random() * catalogue.length)]} alt="productdetails"></img>

            <div className="content">
              <h2> { product.title } </h2>
              <p> { product.description}</p>
              <p> { product.price } &euro; </p>
            </div>
            <button className= 'submit-button'>BUY</button>
          
        </div>
      )
    }
}

const mapStateToProps = (state) => ({
    product : state.productInfo
})

export default connect (mapStateToProps, {fetchProductInfo}) (ProductInfo)