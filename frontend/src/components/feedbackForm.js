import React from "react";
import axios from "axios";

//props:なし
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
       axios.post("http://localhost:5000/feedback", data).then((res)=>{
       console.log(res);
       this.setState({value:""});
       })
       event.preventDefault();
       }

    render(){
        return(
            <div>
                <h2>フィードバックを記入するフォームです</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        フィードバック：
                        <textarea　value={this.state.value} onChange={this.handleChange} />
                    </label>
                <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default FeedbackForm;