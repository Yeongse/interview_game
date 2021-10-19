import React from "react";


class FinishLog extends React.Component{
    constructor(props){
        super(props);
    }

    
    render(){
        switch(this.props.isWan){
            case 1:
                return(
                    <div onClick={this.props.forChange0}>
                        <p>
                            本日はこれにて面接は終了です、お疲れ様でした。
                            では後日、次の面接に進んでいただきます。
                            次回も頑張ってくださいね、応援しております。
                        </p>
                    </div>
                )
            
            case 0:
                return(
                    <div onClick={this.props.forChange1}>
                        <p>
                            本日はこれにて面接は終了です、お疲れ様でした。
                            また後ほど弊社からのご連絡をお待ちください。
                        </p>
                    </div>
                )
        }
    }
}

export default FinishLog;