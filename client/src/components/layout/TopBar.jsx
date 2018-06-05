//src/component/layout/TopBar.jsx
import React, {PureComponent} from 'react'
import { withRouter } from "react-router-dom";

// Styling
import '../../css/layout.css'

class TopBar extends PureComponent {
    render() {
        return (
          <div className='top-bar'>
            <h1>Ducky Bay</h1> 
          </div>
        )
    }
}

export default withRouter(TopBar);