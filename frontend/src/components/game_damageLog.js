import React from "react";

//props:character.props,answer.propsによって計算される相性
class DamageLog extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div onClick={this.props.forChange}>
                <p>
                    {this.props.damage}のダメージ
                </p>
            </div>
        )
    }
}

export default DamageLog;