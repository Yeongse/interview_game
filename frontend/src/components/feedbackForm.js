import React from "react";
import axios from "axios";

//props:なし
class FeedbackForm extends React.Component{
    

    /*sendFeedback(){
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
                <h2>フィードバックを記入するフォームです</h2>
            </div>
        )
    }
}

export default FeedbackForm;