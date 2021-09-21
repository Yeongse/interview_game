import React from "react";
import axios from "axios";

//props:なし
class FeedbackList extends React.Component{

    /*readFeedback(){
        axios.get("http://localhost:5000/feedback")
          .then(res => {
            const feedbacks = res.data;
            this.setState({feedbacks});
          })
      }
    */

    render(){
        return(
            <div>
                <h2>過去のフィードバックです</h2>
            </div>
        )
    }
}

export default FeedbackList;