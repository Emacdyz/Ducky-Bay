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

  openModal = () => {

    let button = document.getElementById('button')
    button.style.display = "none"

    let seller = document.getElementById('seller')
    seller.style.display = "block"

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

            
              <div className="seller" id="seller">
              <h2> Seller: </h2>
              <p> { product.contactName } : { product.contactInfo } </p>
              </div>
           

            <button className= 'submit-button' id="button" onClick={this.openModal}>BUY</button>
          
        </div>
      )
    }
}

const mapStateToProps = (state) => ({
    product : state.productInfo
})

export default connect (mapStateToProps, {fetchProductInfo}) (ProductInfo)