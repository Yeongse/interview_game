import "./components.css"
import React from "react";

//props:question, forChange
class QuestionLog extends React.Component{
    render(){
        return(
            <div className="message-wrapper"　onClick={this.props.forChange}>
                <div className="question">
                    <p className="secondPerson">
                        {this.props.question}
                    </p>
                </div>
            </div>
        )
    }
}

export default QuestionLog;