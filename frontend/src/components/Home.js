import "./components.css"
import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render(){
    return(
      <div className="home-wrapper">
        <div className="top-message">
          <h1>Welcome to the Interview Game!!</h1>
          <div className="sub-title-wrapper">
            <p className="sub-title">就活生になりきって内定獲得を目指せ！！</p>
          </div>
        </div>
        <div className="top-menu-wrapper">
          <div className="top-menu1">
            <Link to="/game" className="home-link">Game Start</Link>
          </div>
          <div className="top-menu2">
            <Link to="/feedback" className="home-link">Feedback to Developer</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;