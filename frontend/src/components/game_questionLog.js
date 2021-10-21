import React from "react";

//props:question, forChange
class QuestionLog extends React.Component{
    render(){
        return(
            <div className="message-wrapper"　onClick={this.props.forChange}>
                <p>{this.props.question}</p>
            </div>
        )
    }
}

export default QuestionLog;