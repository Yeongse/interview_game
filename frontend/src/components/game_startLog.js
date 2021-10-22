import "./components.css"
import React from "react";

//props:phase, character, company, member
class StartLog extends React.Component{
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
                    <div className="independent">
                        <p className="thirdPerson">
                            ({this.props.phase+1}回目の面接です。)
                        </p>
                    </div>
            </div>
            );
        }
        else 
        if(this.state.phase === 1){
            return(
                <div className="message-wrapper" onClick={this.countClick}>
                    <p className="firstPerson">
                        <p>初めまして。{this.props.character.background}の{this.props.character.name}と申します。</p>
                        <p>本日は面接よろしくお願いします。</p>
                    </p>
            </div>
            );
        }
        else
        if(this.state.phase === 2){
            return(
                <div className="message-wrapper" onClick={this.countClick}>
                    <p className="secondPerson">
                        <p>初めまして。{this.props.company.name}、{this.props.member.position}の{this.props.member.name}です。</p>
                        <p>こちらこそ本日はよろしくお願いします。</p>
                    </p>
                </div>
            );
        }
        else
        if(this.state.phase === 3){
            return(
                <div className="message-wrapper" onClick={this.countClick}>
                    <p className="thirdPerson">
                        <p>名前：{this.props.member.name}</p>
                        <p>役職：{this.props.member.position}</p>
                        <p>人物像:{this.props.member.personality}</p>
                    </p>
                </div>
            );
        }
        else{
            return(
                <div className="message-wrapper" onClick={this.props.forChange}>
                    <p className="secondPerson">
                        それでは面接を始めていきます。今から質問をしていきますので、適切だと思う選択肢をクリックしてください。
                    </p>
                </div>
            );
        }
    }
}

export default StartLog;