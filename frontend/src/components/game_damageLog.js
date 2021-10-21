import React from "react";

//props:damage, forChange
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