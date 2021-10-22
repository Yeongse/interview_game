import "./components.css"
import React from "react";

//props:なし
class Frame extends React.Component{
    render(){
        return(
            <div className="frame">
                <h1>面接ゲーム</h1>
                <p>下の四角いところをクリックするとゲームが進むよ</p>
            </div>
        )
    }
}

export default Frame;