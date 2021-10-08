import React from "react";
import axios from "axios";

import Image        from "./game_image";
import Frame        from "./frame";
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
        this.state={phase:0, gameParams:{}};;
        this.countClick = this.countClick.bind(this);
        this.componentController = this.componentController.bind(this);
    }

    componentDidMount(){
        axios.get("http://localhost:5000/game").then(res => {
            const fetched_data = res.data;
            this.setState({gameParams:fetched_data});
            console.log(this.state.gameParams.characters.image_src[0]); //これは表示される
        })
    }

    countClick(){
        this.setState({phase:this.state.phase+1});
    }

    componentController(){
        console.log(this.state.gameParams.characters.image_src[0]); //これは表示されない
        //const CHARACTER = {
        //    image_src:this.state.gameParams.characters.image_src[0],
        //    name:this.state.gameParams.characters.name[0],
        //    background:this.state.gameParams.characters.background[0],
        //    skill:this.state.gameParams.characters.skill[0],
        //   personality:this.state.gameParams.characters.personality[0]
        //}

        //const COMPANY = {
        //    genre:this.state.gameParams.companies.genre[0],
        //    name:this.state.gameParams.companies.name[0]
        //}

        //const characterAndCompany = {
        //    character:CHARACTER,
        //    company:COMPANY
        //}

        switch(this.state.phase){
            //case 0: return <FirstMessage　characterAndCompany />; break; 
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