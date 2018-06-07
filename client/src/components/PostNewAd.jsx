//src/components/PostNewAd.js
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {upload} from '../actions/upload'

//Styling 
import '../css/uploadForm.css'

class PostNewAd extends PureComponent {

	constructor(props) {

        super(props);
        this.state = {
          gallery: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

	handleSubmit = (e) => {
        e.preventDefault()
        if (!this.state.picture) 
			return alert('Please add a picture!')
		this.props.upload(this.state.picture,
							this.state.title,
							this.state.description,
							this.state.price)
			
	}

	handleChange = (e) => {
		const {name,value} = e.target
		this.setState({
			[name]: value
		})
	}

	handleUpload= (event) => {

		const myFileReader = new FileReader()
		myFileReader.onload = (e) => {
            this.setState({ 
                imageSrc: myFileReader.result, 
            }); 
		}
		
		myFileReader.readAsDataURL(event.target.files[0])
		
	
		this.setState({
			picture: event.target.files[0]
		})
  	}

	render() {
		
		return (
			<div>
				<h1> #SELL </h1>
			<form encrypt="multipart/form-data">
				
				<div className="add-picture">
					<input type="file" name="gallery" id="gallery" onChange={ this.handleUpload } /> 
					{ this.state.imageSrc && <img className="picture"src={this.state.imageSrc} alt="preview" style={{height: 200}}/>}	
					{!this.state.imageSrc && <p> + Add a picture </p>}
				</div>
				

				<div className="field">
					<p>Title</p>
					<input type="text" name="title" id="title" onChange={ this.handleChange }/>
				
					<p>Description</p>
					<input type="text" name="description" id="description" onChange={ this.handleChange } />

					<p>Price</p>
					<input type="text" name="price" id="price" onChange={ this.handleChange } />
				</div>

				<button className= 'submit-form' onClick={this.handleSubmit}>ADD</button>
			</form>
			</div>
			
		)
	}
}

export default connect(null, {upload}) (PostNewAd) 