import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

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
        this.state={totalPhase:0, gamePhase:0, gameParams:{}};;
        this.addTotalPhase = this.addTotalPhase.bind(this);
        this.addGamePhase  = this.addGamePhase.bind(this)
        this.componentController = this.componentController.bind(this);
    }

    componentDidMount(){
        axios.get("http://localhost:5000/game").then(res => {
            const fetched_data = res.data;
            this.setState({gameParams:fetched_data});
        })
    }

    addTotalPhase(){
        this.setState({totalPhase:this.state.totalPhase+1});
    }

    addGamePhase(){
        this.setState({gamePhase:this.state.gamePhase+1});
    }

    

    componentController(){
        if (this.state.gameParams.characters !== undefined){
            const CHARACTER = {
                image_src:this.state.gameParams.characters.image_src[0],
                name:this.state.gameParams.characters.name[0],
                background:this.state.gameParams.characters.background[0],
                skill:this.state.gameParams.characters.skill[0],
                personality:this.state.gameParams.characters.personality[0]
            }
    
            const COMPANY = {
                genre:this.state.gameParams.companies.genre[0],
                name:this.state.gameParams.companies.name[0]
            }


            if(this.state.totalPhase === 0){
                return <FirstMessage　character={CHARACTER} company={COMPANY} forChange={this.addTotalPhase}/>;
            }
            else{
                for(let interviewStep=0; interviewStep < 3; interviewStep++){
                    this.setState({gamePhase:0});

                    let MEMBER = {
                        image_src:this.state.gameParams.members.image_src[interviewStep],
                        name:this.state.gameParams.members.name[interviewStep],
                        HP:this.state.gameParams.members.HP[interviewStep],
                        personality:this.state.gameParams.members.personality[interviewStep],
                        position:this.state.gameParams.members.position[interviewStep],
                        question_group:this.state.gameParams.members.question_group[interviewStep]
                    }
                    
                    
                    while(this.state.gamePhase < 10){
                        let questionStep = 2*interviewStep + (gamePhase/5);
                        
                        switch(this.state.gamePhase % 5){
                        case 0: return <StartLog character={CHARACTER} company={COMPANY} member={MEMBER} step={interviewStep} forChange={this.addGamePhase}/>;
                                break;
                        case 1: return <QuestionLog　question={this.state.gameParams.questions.text[questionStep]} forChange={this.addGamePhase}/>; break;
                        case 2: return <AnswerList/>; break;
                        case 3: return <AnswerLog/>; break;
                        case 4: return <DamageLog/>; break;
                        }
                    }
                }

            }
            
            switch(this.state.phase){
                case 6: return <FinishLog/>; break;
                case 7: return <FinalMessage/>; break;
            }
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
                <Link to="/" className="top_menu">ホームに戻る</Link>
            </div>
        )
    }
}

export default Game;