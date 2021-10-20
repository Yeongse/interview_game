import React from "react";


class FinishLog extends React.Component{
    constructor(props){
        super(props);
    }

    
    render(){
        switch(this.props.isLose){
            case true:
                return(
                    <div onClick={this.props.forChangeTrue}>
                        <p>
                            本日はこれにて面接は終了です、お疲れ様でした。
                            また後ほど弊社からのご連絡をお待ちください。
                        </p>
                    </div>
                )
                
            case false:
                return(
                    <div onClick={this.props.forChangeFalse}>
                        <p>
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