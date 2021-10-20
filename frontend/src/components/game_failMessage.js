import React from "react";


class FailMessage extends React.Component{
    constructor(props){
        super(props);
        this.state={phase:0}; 
        this.countClick = this.countClick.bind(this);
    }

    countClick(){
        this.setState({"phase":this.state.phase+1});
    }

    render(){
            if(this.state.phase === 0){
                return(
                    <div className="message-wrapper"　onClick={this.countClick}>
                        <p>
                            この度は弊社の選考に応募いただきありがとうございました。
                            誠に残念ながら、選考に関しまして貴意に添い兼ねる結果となりました。
                            何卒ご容赦くださるようお願いします。
                        </p>
                </div>
                );
            }
            else{
                return(
                    <div className="message-wrapper" onClick={this.countClick}>
                        <p>
                            (これでゲームは終了です)
                        </p>
                </div>
                );
            }
    }
}

export default FailMessage;