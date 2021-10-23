import "./components.css"
import React from "react";

//props:isLose, forChange
class FinishLog extends React.Component{

    constructor(props){
        super(props);
    }
    
    render(){
        switch(this.props.isLose){
            case true:
                return(
                    <div className="message-wrapper" onClick={this.props.forChangeTrue}>
                        <p className="secondPerson">
                            本日はこれにて面接は終了です、お疲れ様でした。
                            また後ほど弊社からのご連絡をお待ちください。
                        </p>
                    </div>
                )
                
            case false:
                return(
                    <div className="message-wrapper" onClick={this.props.forChangeFalse}>
                        <p className="secondPerson">
                            本日はこれにて面接は終了です、お疲れ様でした。
                            では後日、次の面接に進んでいただきます。
                            次回も頑張ってくださいね、応援しております。
                        </p>
                    </div>
                )
        }
    }
}

export default FinishLog;