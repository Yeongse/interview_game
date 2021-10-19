import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

import Image        from "./game_image";
import Frame        from "./frame";
import FirstMessage from "./game_firstMessage";
import Interview    from "./game_interview"
import FinalMessage from "./game_finalMessage";


class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {totalPhase:0, gameParams:{}};;
        this.addTotalPhase  = this.addTotalPhase.bind(this);
        this.finishGame     = this.finishGame.bind(this);
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


    finishGame(){
        this.setState({totalPhase:100})
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

            switch(this.state.totalPhase){
                case 0:   return <FirstMessage　character={CHARACTER} company={COMPANY} forChange={this.addTotalPhase}/>;
                          break;
                case 1:   return <Interview interviewPhase={this.state.totalPhase-1} gameParams={this.state.gameParams} forChange0={this.addTotalPhase} forChange1={this.finishGame}/>;
                          break;
                case 2:   return <Interview interviewPhase={this.state.totalPhase-1} gameParams={this.state.gameParams} forChange0={this.addTotalPhase} forChange1={this.finishGame}/>;
                          break;
                case 3:   return <Interview interviewPhase={this.state.totalPhase-1} gameParams={this.state.gameParams} forChange0={this.addTotalPhase} forChange1={this.finishGame}/>;
                          break;
                case 100: return <FinalMessage />;
                          break;
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