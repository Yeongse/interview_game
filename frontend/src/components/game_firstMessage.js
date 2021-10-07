import React from "react";

//props:character
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
        if(this.this.state.phase === 0){
            return(
                <div className="message-wrapper"　onClick={this.countClick}>
                <p>
                    私は{this.props.character.background}の{this.props.character.name}です。
                    今回は{this.props.company.genre}の{this.props.company.name}にエントリーします！
                    内定獲得を目指してがんるぞ！
                </p>
            </div>
            );
        }
        else 
        if(this.state.phase === 1){
            return(
                <div className="message-wrapper" onClick={this.countClick}>
                <p>
                    名前：{this.props.character.name}、学歴：{this.props.character.background}、スキル：{this.props.character.experience}、
                    人物像:{this.props.character.personality}
                </p>
            </div>
            );
        }
        else{
            return(
                <div className="message-wrapper">
                    <p>次に進んでください</p>
                </div>
            )
        }
    }
}

export default FirstMessage;