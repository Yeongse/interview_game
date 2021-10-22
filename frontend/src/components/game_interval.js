import React from "react";

//props:forChange
class Interval extends React.Component{
    render(){
        return(
            <div className="message-wrapper"　onClick={this.props.forChange}>
                <p className="thirdPerson">
                    (次に進んでください)
                </p>
            </div>
        )
    }
}

export default Interval;