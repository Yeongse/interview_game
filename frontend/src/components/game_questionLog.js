import React from "react";

//props:question
class QuestionLog extends React.Component{
    render(){
        return(
            <div className="message-wrapper"　onClick={this.props.forChange}>
                <p>{this.props.question.text}。</p>
            </div>
        )
    }
}

export default QuestionLog;