import React from "react";
import StartLog     from "./game_startLog";
import FinishLog    from "./game_finishLog";
import DamageLog    from "./game_damageLog";
import QuestionLog  from "./game_questionLog";
import AnswerLog    from "./game_answerLog";
import AnswerList   from "./game_answerList";


//props:interviewPhase=(0,1,2), gameParams
//this.props.forChangeTrue:面接落ちた時 forChangeFalse:面接通過した時
class Interview extends React.Component{
    constructor(props){
        super(props);
        this.state = {gamePhase:0, chosenNumber:0,totalDamage:0};
        this.addGamePhase = this.addGamePhase.bind(this);
        this.getAnswer0   = this.getAnswer0.bind(this);
        this.getAnswer1   = this.getAnswer1.bind(this);
        this.getAnswer2   = this.getAnswer2.bind(this);
        this.getAnswer3   = this.getAnswer3.bind(this);
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
    
    makeInterview(){
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
        let answerID, damage, isLose;

        function calcDamage(answerID){
            function getBetweenRandom(){
                return Math.random()*(1.2-0.8)+0.8;
            }
    
            switch(answerID){
                case 1:  return Math.floor(100*getBetweenRandom()*0.4);  break;
                case 2:  return Math.floor(100*getBetweenRandom()*0.15); break;
                case 3:  return Math.floor(100*getBetweenRandom()*0.1);  break;
                case 4:  return Math.floor(100*getBetweenRandom()*0.6);  break;
                case 5:  return Math.floor(100*getBetweenRandom()*0.25); break;
                case 6:  return Math.floor(100*getBetweenRandom()*0.6);  break;
                case 7:  return Math.floor(100*getBetweenRandom()*0.35); break;
                case 8:  return Math.floor(100*getBetweenRandom()*0.2);  break;
                case 9:  return Math.floor(150*getBetweenRandom()*0.6);  break;
                case 10: return Math.floor(150*getBetweenRandom()*0.45); break;
                case 11: return Math.floor(150*getBetweenRandom()*0.1);  break;
                case 12: return Math.floor(150*getBetweenRandom()*0.3);  break;
                case 13: return Math.floor(150*getBetweenRandom()*0.2);  break;
                case 14: return Math.floor(150*getBetweenRandom()*0.5);  break;
                case 15: return Math.floor(150*getBetweenRandom()*0.1);  break;
                case 16: return Math.floor(150*getBetweenRandom()*0.5);  break;
                case 17: return Math.floor(200*getBetweenRandom()*0.35); break;
                case 18: return Math.floor(200*getBetweenRandom()*0.25); break;
                case 19: return Math.floor(200*getBetweenRandom()*0.5);  break;
                case 20: return Math.floor(200*getBetweenRandom()*0.5);  break;
                case 21: return Math.floor(200*getBetweenRandom()*0.6);  break;
                case 22: return Math.floor(200*getBetweenRandom()*0.3);  break;
                case 23: return Math.floor(200*getBetweenRandom()*0.35); break;
                case 24: return Math.floor(200*getBetweenRandom()*0.1);  break;
            };
        }

        switch(this.state.gamePhase%10){
            case 0: return <StartLog character={CHARACTER} company={COMPANY} member={MEMBER} phase={this.props.interviewPhase} forChange={this.addGamePhase}/>;
                    break;
            case 1: return <QuestionLog question={this.props.gameParams.questions.text[2*this.props.interviewPhase]} forChange={this.addGamePhase}/>; 
                    break;
            case 2: return <AnswerList phase={this.props.interviewPhase} answers={this.props.gameParams.answers} forChange0={this.getAnswer0} forChange1={this.getAnswer1} forChange2={this.getAnswer2} forChange3={this.getAnswer3}/>;
                    break;
            case 3: answerID = this.props.gameParams.answers.id[4*this.props.interviewPhase+this.state.chosenNumber];
                    return <AnswerLog answerID={answerID} gameParams={this.props.gameParams} forChange={this.addGamePhase}/>; 
                    break;
            case 4: answerID = this.props.gameParams.answers.id[4*this.props.interviewPhase+this.state.chosenNumber];
                    damage   = calcDamage(answerID);
                    return <DamageLog damage={damage} forChange={()=>this.setState({gamePhase:this.state.gamePhase+1,totalDamage:this.state.totalDamage+damage})}/>; 
                    break;
            case 5: return <QuestionLog　question={this.props.gameParams.questions.text[2*this.props.interviewPhase+1]} forChange={this.addGamePhase}/>; 
                    break;
            case 6: return <AnswerList phase={this.props.interviewPhase+1} answers={this.props.gameParams.answers} forChange0={this.getAnswer0} forChange1={this.getAnswer1} forChange2={this.getAnswer2} forChange3={this.getAnswer3}/>; 
                    break;
            case 7: answerID = this.props.gameParams.answers.id[4*(this.props.interviewPhase+1)+this.state.chosenNumber];
                    return <AnswerLog answerID={answerID} gameParams={this.props.gameParams} forChange={this.addGamePhase}/>; 
                    break;
            case 8: answerID = this.props.gameParams.answers.id[4*(this.props.interviewPhase+1)+this.state.chosenNumber];
                    damage   = calcDamage(answerID);
                    return <DamageLog damage={damage} forChange={()=>this.setState({gamePhase:this.state.gamePhase+1,totalDamage:this.state.totalDamage+damage})}/>; 
                    break;
            case 9: isLose = this.state.totalDamage < MEMBER.HP
                    console.log(this.state.totalDamage-MEMBER.HP);
                    return <FinishLog isLose={isLose} forChangeTrue={this.props.forChangeTrue}　forChangeFalse={this.props.forChangeFalse}/>; 
                    break;
        }
    }





    render(){
        console.log(this.state.gamePhase);
        return this.makeInterview();
    }
}

export default Interview;