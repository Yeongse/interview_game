import React from "react";
import axios from "axios";

import Image        from "./game_image";
import Frame        from "./frame";
import CharacterSelect from "./game_characterSelect";
import FirstMessage from "./game_firstMessage";
import FinalMessage from "./game_finalMessage";
import StartLog     from "./game_startLog";
import FinishLog    from "./game_finishLog";
import DamageLog    from "./game_damageLog";
import QuestionLog  from "./game_questionLog";
import AnswerLog    from "./game_answerLog";
import AnswerList   from "./game_answerList";


class Game extends React.Component{
    constructor(props){
        super(props);
        this.state={"phase":0};
        this.countClick = this.countClick.bind(this);
        this.componentController = this.componentController.bind(this);
    }

    componentDidMount(){
        axios.get("http://localhost:5000/game").then(res => {
            const fetched_data = res.data;
            this.setState({gameParams:fetched_data});
        })
    }

    countClick(){
        this.setState({"phase":this.state.phase+1});
    }

    componentController(){
        switch(this.state.phase){
            case 0: return <FirstMessage　characterAndCompany />; break; 
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
                <Frame />
                <Image />
                <div className="variable">
                    {this.componentController()}
                </div>
                <button onClick={this.countClick}>次に進む(今のフェイズ:{this.state.phase})</button>
            </div>
        )
    }
}

export default Game;