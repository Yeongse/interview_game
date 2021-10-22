import "./components.css"
import React from "react";
import FeedbackForm from "./feedbackForm";
import FeedbackList from "./feedbackList";
import { Link } from 'react-router-dom'

class Feedback extends React.Component{
    render(){
        return(
            <div className="feedback-wrapper">
              <FeedbackList />
              <FeedbackForm />
              <Link to="/" className="top_menu">ホームに戻る</Link>
            </div>
        )
    }
}

export default Feedback;