//src/components/ProductInfo.js
import React, {PureComponent} from 'react'

class ProductInfo extends PureComponent {
    render() {
      const {product} = this.props
      return (
        <div>
            <h1>{ product.title }</h1>
            <p>&euro; { product.price }.00 </p>
            <p> { product.description}</p>
        </div>
      )
    }
}

// const mapStateToProps = function (state, props) {
//   return {
//     product: state.products.find(p => p.id === Number(props.match.params.id))
//   }
// }

export default ProductInfo