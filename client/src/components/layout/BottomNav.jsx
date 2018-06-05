//src/components/layout/BottomBar.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

//styling
import '../../css/layout.css'

const BottomNav = (props) => {

    const { location } = props
    return (
      <div className='bottom-nav'>
        <div className='left-icon'>
          {location.pathname.indexOf('home') < 0 && <Link to={'/home'}><img src="icons/NavIcon.svg" alt="home-icon"></img></Link>}
          {location.pathname.indexOf('home') > 0 && <Link to={'/home'}><img src="icons/NavIconActive.svg" alt="home-icon"></img></Link>}
        </div>
        <div className='add-button'>
          {location.pathname.indexOf('upload') < 0 && <Link to={'/upload'}><img src="icons/addIcon.svg" alt="add-icon"></img></Link>}
        </div>
        <div className='right-icon'>
          {location.pathname.indexOf('profile') > 0 && <Link to={'/profile'}><img src="icons/ProfileIconActive.svg" alt="profile-icon"></img></Link>}
          {location.pathname.indexOf('profile') < 0 && <Link to={'/profile'}><img src="icons/ProfileIcon.svg" alt="profile-icon"></img></Link>}
          {/* <Link to={'/logout'}><img src="icons/loguit.svg" alt="loguit-icon" className="logout"></img></Link> */}
        </div>

      </div>
      
    );
  }


export default withRouter(BottomNav)