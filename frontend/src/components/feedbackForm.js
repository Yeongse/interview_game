import "./components.css"
import React from "react";
import axios from "axios";


class FeedbackForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {value:""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
       alert('フィードバックが送信されました：' + this.state.value);
       const data = {
           comments:this.state.value
       }
       axios.post("https://interviewgamebackend.herokuapp.com/feedback", data).then((res)=>{
       console.log(res);
       this.setState({value:""});
       })
       event.preventDefault();
       }

    render(){
        return(
            <div className="form-wrapper">
                <header className="form-header">
                    <h2>フィードバックを記入するフォームです</h2>
                </header>
                <div className="feedbackForm">
                    <form onSubmit={this.handleSubmit}>
                            <div className="comment">フィードバック：</div>
                            <textarea　value={this.state.value} onChange={this.handleChange} />    
                    <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        )
    }
}

export default FeedbackForm;