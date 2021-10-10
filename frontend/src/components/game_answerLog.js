import React from "react";

//props:answer.text
class AnswerLog extends React.Component{
    render(){
        return(
            <div onClick={this.props.forChange}>
                <h1>AnswerLogです</h1>
            </div>
        )
    }
}

export default AnswerLog;