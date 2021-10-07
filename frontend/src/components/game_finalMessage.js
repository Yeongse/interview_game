import React from "react";

//props:全部クリアできたかどうか(boolian)
class FinalMessage extends React.Component{
    render(){
        return(
            <div className="message-wrapper">
                <p>
                    私は{this.props.background}の{this.self.name}です。
                </p>
            </div>
        )
    }
}

export default FinalMessage;