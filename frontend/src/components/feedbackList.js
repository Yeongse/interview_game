import "./components.css"
import React from "react";
import axios from "axios";

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
            <div className="list-wrapper">
                <header className="list-header">
                    <h2>過去のフィードバック</h2>
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