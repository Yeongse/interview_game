import "./components.css"
import React from "react";

//props:forChange
class Interval extends React.Component{
    render(){
        return(
            <div className="message-wrapper"　onClick={this.props.forChange}>
                <div className="independent">
                    <p className="thirdPerson">
                        (次に進んでください)
                    </p>
                </div>
            </div>
        )
    }
}

export default Interval;