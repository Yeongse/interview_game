import React from "react";
import image0 from "../images/student.png";
import image1 from "../images/hr.png";
import image2 from "../images/staff.png";
import image3 from "../images/officer.png";

//props:phase
class Image extends React.Component{

    //case2, 4 は倒れてるやつ
    imageGenerator(phase){
        switch(phase){
            case 0: 
                return(
                    <div>
                        <img src={image0}/>
                    </div>
                )
                break;
            case 1: 
                return(
                    <div>
                        <img src={image0}/>
                        <img src={image1}/>
                    </div>
                )
                break;
            case 2: 
                return(
                    <div>
                        <img src={image0}/>
                        <img src={image1}/>
                    </div>
                )
                break;
            case 3: 
                return(
                    <div>
                        <img src={image0}/>
                        <img src={image2}/>
                    </div>
                )
                break;
            case 4: 
                return(
                    <div>
                        <img src={image0}/>
                        <img src={image2}/>
                    </div>
                )
                break;
            case 5: 
                return(
                    <div>
                        <img src={image0}/>
                        <img src={image3}/>
                    </div>
                )
                break;
            case 6: 
                return(
                    <div>
                        <img src={image0}/>
                    </div>
                )
                break;
            case 100: 
                return(
                    <div>
                        <img src={image0}/>
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