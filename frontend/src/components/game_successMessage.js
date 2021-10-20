import React from "react";


class SuccessMessage extends React.Component{
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
                    内定獲得！！
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

export default SuccessMessage;