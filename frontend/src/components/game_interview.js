import React from "react";
import StartLog     from "./game_startLog";
import FinishLog    from "./game_finishLog";
import DamageLog    from "./game_damageLog";
import QuestionLog  from "./game_questionLog";
import AnswerLog    from "./game_answerLog";
import AnswerList   from "./game_answerList";


//props:gameParams, totalPhase
class Interview extends React.Component{
    constructor(props){
        super(props);
        this.state = {gamePhase:0, chosenNumber:0};
        this.addGamePhase   = this.addGamePhase.bind(this);
        this.getAnswer0 = this.getAnswer0.bind(this);
        this.getAnswer1 = this.getAnswer1.bind(this);
        this.getAnswer2 = this.getAnswer2.bind(this);
        this.getAnswer3 = this.getAnswer3.bind(this);
    }


    addGamePhase(){
        this.setState({gamePhase:this.state.gamePhase+1});
    }

    getAnswer0(){
        this.setState({gamePhase:this.state.gamePhase+1, chosenNumber:0});
    }
    getAnswer1(){
        this.setState({gamePhase:this.state.gamePhase+1, chosenNumber:1});
    }

    getAnswer2(){
        this.setState({gamePhase:this.state.gamePhase+1, chosenNumber:2});
    }

    getAnswer3(){
        this.setState({gamePhase:this.state.gamePhase+1, chosenNumber:3});
    }

    


    render(){
        const CHARACTER = {
            image_src:this.props.gameParams.characters.image_src[0],
            name:this.props.gameParams.characters.name[0],
            background:this.props.gameParams.characters.background[0],
            skill:this.props.gameParams.characters.skill[0],
            personality:this.props.gameParams.characters.personality[0]
        }

        const COMPANY = {
            genre:this.props.gameParams.companies.genre[0],
            name:this.props.gameParams.companies.name[0]
        }

        const MEMBER = {
            image_src:this.props.gameParams.members.image_src[this.props.interviewPhase],
            name:this.props.gameParams.members.name[this.props.interviewPhase],
            HP:this.props.gameParams.members.HP[this.props.interviewPhase],
            personality:this.props.gameParams.members.personality[this.props.interviewPhase],
            position:this.props.gameParams.members.position[this.props.interviewPhase],
            question_group:this.props.gameParams.members.question_group[this.props.interviewPhase]
        }


        switch(this.state.gamePhase){
            case 0: return <StartLog     character={CHARACTER} company={COMPANY} member={MEMBER} phase={this.props.interviewPhase} forChange={this.addGamePhase}/>;
                    break;
            case 1: return <QuestionLog　question={this.props.gameParams.questions.text[2*this.props.interviewPhase]} forChange={this.addGamePhase}/>; 
                    break;
            case 2: return <AnswerList   phase={this.props.interviewPhase} answers={this.props.gameParams.answers} forChange0={this.getAnswer0} forChange1={this.getAnswer1} forChange2={this.getAnswer2} forChange3={this.getAnswer3}/>;
                    break;
            case 3: return <AnswerLog    phase={this.props.interviewPhase} chosenNumber={this.props.chosenNumber} gameParams={this.props.gameParams} forChange={this.addGamePhase}/>; 
                    break;
            case 4: return <DamageLog    forChange={this.addGamePhase}/>; 
                    break;
            case 5: return <QuestionLog　question={this.props.gameParams.questions.text[2*this.props.interviewPhase+1]} forChange={this.addGamePhase}/>; 
                    break;
            case 6: return <AnswerList   forChange={this.addGamePhase}/>; 
                    break;
            case 7: return <AnswerLog    forChange={this.addGamePhase}/>; 
                    break;
            case 8: return <DamageLog    forChange={this.addGamePhase}/>; 
                    break;
            case 9: return <FinishLog    forChange={this.props.forChange}/>; 
                    break;
        }
    }
}

export default Interview;