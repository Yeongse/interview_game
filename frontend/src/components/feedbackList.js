import React from "react";
import axios from "axios";

//props:なし
class FeedbackList extends React.Component{
    constructor(props){
        super(props);
        this.state = {feedbacks:[]};
    }

    componentDidMount(){
        axios.get("http://localhost:5000").then(res => {
            const data_gotten = res.data;
            console.log(data_gotten.names);
            this.setState({feedbacks:data_gotten.names});
            console.log(this.state);
        })
    }

    render(){
        return(
            <div className="FeedbackList">
                <header className="ListHeader">
                    <h1>過去のフィードバック</h1>
                </header>
                <div>
                    {this.state.feedbacks.map((element, i) => 
                    <div className="cardWrapper">
                        <div className="card" key={i}>
                            <div className="card-content">
                                <p className="card-title">{element}</p>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        )
    }
}

export default FeedbackList;