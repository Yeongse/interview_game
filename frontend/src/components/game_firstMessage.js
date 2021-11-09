import "./components.css"
import React from "react";

//props:character, company, forChange
class FirstMessage extends React.Component{
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
                    <p className="firstPerson">
                        <p>私は{this.props.character.background}の{this.props.character.name}です。</p>
                        <p>今回は{this.props.company.genre}の{this.props.company.name}にエントリーします！</p>
                        <p>内定獲得を目指してがんばるぞ！</p>
                    </p>
            </div>
            );
        }
        else 
        if(this.state.phase === 1){
            return(
                <div className="message-wrapper" onClick={this.countClick}>
                    <p className="third-person">
                        <p>名前：{this.props.character.name}</p>
                        <p>学歴：{this.props.character.background}</p>
                        <p>スキル：{this.props.character.skill}</p>
                        <p>人物像:{this.props.character.personality}</p>
                    </p>
            </div>
            );
        }
        else{
            return(
                <div className="message-wrapper" onClick={this.props.forChange}>
                    <div className="independent">
                        <p className="thirdPerson">
                            (次に進んでください)
                        </p>
                    </div>
                </div>
            )
        }
    }
}

export default FirstMessage;
