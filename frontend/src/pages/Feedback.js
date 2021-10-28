import "./components.css"
import React from "react";
import FeedbackForm from "../components/feedbackForm";
import FeedbackList from "../components/feedbackList";
import { Link } from 'react-router-dom'

class Feedback extends React.Component{
    render(){
        return(
            <div className="all-wrapper">
                <div className="feedback-wrapper">
                <FeedbackList />
                <FeedbackForm />
                </div>
                <Link to="/" className="go-home">ホームに戻る</Link>
            </div>
        )
    }
}

export default Feedback;