import React from "react";
import axios from "axios";

//props:なし
class FeedbackList extends React.Component{
    constructor(props){
        super(props);
        this.state = {feedbacks:[]};
    }

    componentDidMount(){
        axios.get("http://localhost:5000/feedback").then(res => {
            const fetched_data = res.data;
            this.setState({feedbacks:fetched_data.comments});
        })
    }

    render(){
        return(
            <div className="feedbackList">
                <header className="listHeader">
                    <h1>過去のフィードバック</h1>
                </header>
                <div>
                    {this.state.feedbacks.map((element) => 
                    <div className="card">
                        <p className="cardContent">{element}</p>
                    </div>
                    )}
                </div>
            </div>
        )
    }
}

export default FeedbackList;