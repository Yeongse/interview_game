import React from "react";
import FeedbackForm from "./feedbackForm";
import FeedbackList from "./feedbackList";

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