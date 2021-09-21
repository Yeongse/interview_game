import React from "react";
import axios from "axios";

import Image        from "./comp_game_image";
import Frame        from "./comp_frame";
import FirstMessage from "./comp_game_firstMessage";
import FinalMessage from "./comp_game_finalMessage";
import StartLog     from "./comp_game_startLog";
import FinishLog    from "./comp_game_finishLog";
import DamageLog    from "./comp_game_damageLog";
import QuestionLog  from "./comp_game_questionLog";
import AnswerLog    from "./comp_game_answerLog";
import AnswerList   from "./comp_game_answerList";


class Game extends React.Component{
    constructor(props){
        super(props);
        this.state={"phase":0};
        this.countClick = this.countClick.bind(this);
        this.componentController = this.componentController.bind(this);
    }

    countClick(){
        this.setState({"phase":this.state.phase+1});
    }


    componentController(){
        switch(this.state.phase){
            case 0: return <FirstMessage/>; break; 
            case 1: return <StartLog/>; break;
            case 2: return <QuestionLog/>; break;
            case 3: return <AnswerList/>; break;
            case 4: return <AnswerLog/>; break;
            case 5: return <DamageLog/>; break;
            case 6: return <FinishLog/>; break;
            case 7: return <FinalMessage/>; break;
        }
    }

    render(){
        return(
            <div>
                <button onClick={this.countClick}>Gameです(今のフェイズ:{this.state.phase})</button>
                <Frame />
                <Image />

                <div className="variable">
                    {this.componentController()}
                </div>
            </div>
        )
    }
}

export default Game;