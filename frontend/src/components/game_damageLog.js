import React from "react";

//props:character.props,answer.propsによって計算される相性
class DamageLog extends React.Component{
    render(){
        return(
            <div onClick={this.props.forChange}>
                <h1>DamageLogです</h1>
            </div>
        )
    }
}

export default DamageLog;