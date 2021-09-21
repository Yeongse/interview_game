import React from "react";
import FeedbackForm from "./comp_feedbackForm";
import FeedbackList from "./comp_feedbackList";

class Feedback extends React.Component{
    render(){
        return(
            <div>
              <FeedbackList />
              <FeedbackForm />
            </div>
        )
    }
}

export default Feedback;