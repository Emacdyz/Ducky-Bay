//src/components/PostNewAd.js
import React, {PureComponent} from 'react'

class PostNewAd extends PureComponent {
    state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
		const {name, value} = event.target

		this.setState({
		  [name]: value
		})
	}

    render () {
        const initialValues = this.props.initialValues || {}
        return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="Ad title">Ad Title</label>
					<input name="title" id="title" value={
						this.state.title || initialValues.title || ''
					} onChange={ this.handleChange } />
				</div>

                <div>
					<label htmlFor="description">Product description</label>
					<input name="description" id="description" value={
						this.state.description || initialValues.description || ''
					} onChange={ this.handleChange } />
				</div>

                <div>
					<label htmlFor="picture">Picture (url)</label>
					<input name="picture" id="picture" value={
						this.state.picture || initialValues.picture || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="price">Product price</label>
					<input name="price" id="price" value={
						this.state.price || initialValues.price || ''
					} onChange={ this.handleChange } />
				</div>

                <div>
					<label htmlFor="email">Email Address</label>
					<input name="email" id="email" value={
						this.state.email || initialValues.email || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="phone">Phone Number</label>
					<input name="phone" id="phone" value={
						this.state.phone || initialValues.phone || ''
					} onChange={ this.handleChange } />
				</div>

				<button type="submit">Save</button>
			</form>
		)
    }
}
export default PostNewAd 