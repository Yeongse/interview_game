import React from "react";

//props:answer.text
class AnswerList extends React.Component{
    render(){
        return(
            <div>
                <button onClick={this.props.forChange0}>{this.props.answers.text[this.props.phase*4]}</button>
                <button onClick={this.props.forChange1}>{this.props.answers.text[this.props.phase*4+1]}</button>
                <button onClick={this.props.forChange2}>{this.props.answers.text[this.props.phase*4+2]}</button>
                <button onClick={this.props.forChange3}>{this.props.answers.text[this.props.phase*4+3]}</button>
            </div>
        )
    }
}

export default AnswerList;