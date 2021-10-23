import "./components.css"
import React            from "react";
import characterImage   from "../images/student.png";
import hrImage          from "../images/hr.png";
import staffImage       from "../images/staff.png";
import officerImage     from "../images/officer.png";
import successImage     from "../images/success.png";
import failImage        from "../images/fail.png";
import hrBeatImage      from "../images/hr_beat.png";
import staffBeatImage   from "../images/staff_beat.png";
import officerBeatImage from "../images/officer_beat.png";

//props:phase
class Image extends React.Component{

    //case2, 4, 6は倒れてるやつ
    imageGenerator(phase){
        switch(phase){
            case 0: 
                return(
                    <div className="image-wrapper">
                        <img src={characterImage}/>
                    </div>
                )
                break;
            case 1: 
                return(
                    <div className="image-wrapper">
                        <img src={characterImage}/>
                        <img src={hrImage}/>
                    </div>
                )
                break;
            case 2: 
                return(
                    <div className="image-wrapper">
                        <img src={characterImage}/>
                        <img src={hrBeatImage}/>
                    </div>
                )
                break;
            case 3: 
                return(
                    <div className="image-wrapper">
                        <img src={characterImage}/>
                        <img src={staffImage}/>
                    </div>
                )
                break;
            case 4: 
                return(
                    <div className="image-wrapper">
                        <img src={characterImage}/>
                        <img src={staffBeatImage}/>
                    </div>
                )
                break;
            case 5: 
                return(
                    <div className="image-wrapper">
                        <img src={characterImage}/>
                        <img src={officerImage}/>
                    </div>
                )
                break;
            case 6: 
                return(
                    <div className="image-wrapper">
                        <img src={characterImage}/>
                        <img src={officerBeatImage}/>
                    </div>
                )
            case 7: 
                return(
                    <div className="image-wrapper">
                        <img src={successImage}/>
                    </div>
                )
                break;
            case 100: 
                return(
                    <div className="image-wrapper">
                        <img src={failImage}/>
                    </div>
                )
                break;
                    
            
        }
    }

    render(){
        return(
            <div>
                {this.imageGenerator(this.props.phase)}
            </div>
        )
    }
}

export default Image;