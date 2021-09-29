import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render(){
    return(
      <div className="home_menu">
        <h1 className="top_message">ようこそ　面接ゲームへ</h1>
        <Link to="/game" className="top_menu">Game Start</Link>
        <Link to="/feedback"className="top_menu">Feedback to Developer</Link>
      </div>
    )
  }
}

export default Home;