//src/components/PostNewAd.js
import React, {PureComponent} from 'react'


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
		this.props.addPicture(this.state.picture,
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
			<form encrypt="multipart/form-data">
				
				<div>
					<label htmlFor="camera">Camera</label>
					<input type="file" name="gallery" id="gallery" onChange={ this.handleUpload } />
				</div>

				<div>
					<label htmlFor="title">Title</label>
					<input type="text" name="title" id="title" onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="description">Description</label>
					<input type="text" name="description" id="description" onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="price">Price</label>
					<input type="text" name="price" id="price" onChange={ this.handleChange } />
				</div>

				<button onClick={this.handleSubmit}>ADD</button>
			</form>
			
		)
	}
}

export default PostNewAd 