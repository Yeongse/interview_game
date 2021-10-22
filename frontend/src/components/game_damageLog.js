import "./components.css"
import React from "react";

//props:damage, forChange
class DamageLog extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="message-wrapper damage" onClick={this.props.forChange}>
                <div className="independent">
                    <p className="thirdPerson">
                        {this.props.damage}のダメージ
                    </p>
                </div>
            </div>
        )
    }
}

export default DamageLog;