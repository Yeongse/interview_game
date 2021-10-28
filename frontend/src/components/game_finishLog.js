import "./components.css"
import React from "react";

//props:isLose, forChange
class FinishLog extends React.Component{

    constructor(props){
        super(props);
    }
    
    render(){
        if(this.props.phase === 2){
            switch(this.props.isLose){
                case true:
                    return(
                        <div className="message-wrapper" onClick={this.props.forChangeTrue}>
                            <p className="secondPerson">
                                <p>本日はこれにて面接は終了です、お疲れ様でした。</p>
                                <p>また後ほど弊社からのご連絡をお待ちください。</p>
                            </p>
                        </div>
                    )
                    
                case false:
                    return(
                        <div className="message-wrapper" onClick={this.props.forChangeFalse}>
                            <p className="secondPerson">
                                <p>本日はこれにて面接は終了です、お疲れ様でした。</p>
                                <p>また後ほど弊社からのご連絡をお待ちください。</p>
                            </p>
                        </div>
                    )
            }
        }
        else{
            switch(this.props.isLose){
                case true:
                    return(
                        <div className="message-wrapper" onClick={this.props.forChangeTrue}>
                            <p className="secondPerson">
                                <p>本日はこれにて面接は終了です、お疲れ様でした。</p>
                                <p>また後ほど弊社からのご連絡をお待ちください。</p>
                            </p>
                        </div>
                    )
                    
                case false:
                    return(
                        <div className="message-wrapper" onClick={this.props.forChangeFalse}>
                            <p className="secondPerson">
                                <p>本日はこれにて面接は終了です、お疲れ様でした。</p>
                                <p>では後日、次の面接に進んでいただきます。</p>
                                <p>次回も頑張ってくださいね、応援しております!!</p>
                            </p>
                        </div>
                    )
            }
        }
    }
}

export default FinishLog;