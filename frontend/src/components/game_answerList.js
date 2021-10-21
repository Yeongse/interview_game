import React from "react";

//props:phase=interviewPhase, order, answers, forChange
class AnswerList extends React.Component{
    render(){
        return(
            <div>
                <button onClick={this.props.forChange0}>{this.props.answers.text[8*this.props.interviewPhase+4*this.props.order]}</button>
                <button onClick={this.props.forChange1}>{this.props.answers.text[8*this.props.interviewPhase+4*this.props.order+1]}</button>
                <button onClick={this.props.forChange2}>{this.props.answers.text[8*this.props.interviewPhase+4*this.props.order+2]}</button>
                <button onClick={this.props.forChange3}>{this.props.answers.text[8*this.props.interviewPhase+4*this.props.order+3]}</button>
            </div>
        )
    }
}

export default AnswerList;