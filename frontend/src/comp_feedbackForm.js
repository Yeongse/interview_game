import React from "react";
import axios from "axios";

//props:なし
class feedbackForm extends React.Component{
    constructor(){
        this.state = {feedbacks:[]}
    }

    sendFeedback(){
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

export default feedbackForm;