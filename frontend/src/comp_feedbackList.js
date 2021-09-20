import React from "react";
import axios from "axios";

//props:feedbacks.text
class feedbackList extends React.Component{
    constructor(){
        this.state = {feedbacks:[]}
    }

    readFeedback(){
        axios.get("http://localhost:5000/feedback")
          .then(res => {
            const feedbacks = res.data;
            this.setState({feedbacks});
          })
      }

    render(){
        return(
            <div>
                <h2>開発者へのフィードバック</h2>
            </div>
        )
    }
}

export default feedbackList;