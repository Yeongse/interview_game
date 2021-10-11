import React from "react";

//props:answer.text
class AnswerLog extends React.Component{
    constructor(props){
        super(props);
        this.state={phase:0}; 
        this.countClick = this.countClick.bind(this);
    }

    countClick(){
        this.setState({"phase":this.state.phase+1});
    }

    makeAnswerLog(answerID){
        switch(answerID){
            case 1:
                if(this.state.phase === 0){
                    return(
                        <div className="message-wrapper"　onClick={this.countClick}>
                            <p>
                                私が学生時代に頑張ったことは飲食店でのアルバイトです。
                                私は大学の3回生からこのアルバイトを始めたのですが、現在で4ヶ月続けています。
                                現場を指揮するリーダー的存在だと自負しております。
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 1){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p>
                                なるほど、現場のリーダーですか。それはとても頼もしいですね。
                                現場を指揮してくれているとお聞きましたが、具体的にはどのようなことをしていますか？
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 2){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p>
                                えーっと、何かあれば社員さんからの指示をすぐに他のアルバイトに伝えるようにしています。
                                また、皿洗いやホールの業務もちゃんとするように言っています。
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 3){
                    return(
                        <div className="message-wrapper" onClick={this.props.forChange}>
                            <p>
                                まだ少し抽象的ですが、まあ良いでしょう。
                                たくさんのお話をありがとうございました。大変参考になりました。
                                では次の質問に移ります。
                            </p>
                        </div>
                    );
                }
                break;

            case 2: 
                if(this.state.phase === 0){
                    return(
                        <div className="message-wrapper"　onClick={this.countClick}>
                            <p>
                                私が学生時代に頑張ったことは大学の勉強です。
                                私はたくさんの授業を履修して単位を取得することに成功しました。
                                私はその過程でWordとExcelの使い方をマスターしています。
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 1){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p>
                                なるほど、勉強は学生の本分なのでそれを頑張ったのは素晴らしいです。
                                きっちりと単位も取得していて申し分ないと思います。
                                ちなみにWordやExcelはかなりできるとお聞きしましたが、
                                マクロの定義や文書に鍵をかけるといったことはしたことがありますか？
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 2){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p>
                                えっと、マクロですね。はい、あります。
                                文章の中の文字を大きくしたり色を変えたりはできます。
                                鍵をかけるというのは全然わからないです。
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 3){
                    return(
                        <div className="message-wrapper" onClick={this.props.forChange}>
                            <p>
                                なるほど、ありがとうございます。
                                ちなみにマクロは文字を大きくすることではないですよ。
                                今行ったことは実際の業務で使う機能だと思うので、ぜひ勉強してみてください。
                                では次の質問に移ります。
                            </p>
                        </div>
                    );
                }
                break;
            
            case 3: 
                if(this.state.phase === 0){
                    return(
                        <div className="message-wrapper"　onClick={this.countClick}>
                            <p>
                                私が学生時代に頑張ったことは株式投資です。
                                社会人になる前にお金の勉強をしたいと考え、始めました。
                                結果的には損をしましたが、学ぶこともありました。
                            </p>
                    </div>
                    );
                    }
                else
                if(this.state.phase === 1){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p>
                                なるほど、株式投資とは意識が高いですね。
                                個人投資家が利益を出すのは難しいので、損をしても仕方がないと思いますよ。
                                    ちなみにこの経験からどのような学びを得たんですか？
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 2){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p>
                                損はしても仕方ないと割り切るのが大事だと思いました。
                                また、上がる時ははっきり上がる、下がる時もちゃんと下がるということもわかりました。
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 3){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p>
                                失敗を恐れないその心はとてもいいと思います。
                                ちなみに株価が上がるとか下がるとかというのはどのように判別していたんでしょうか？
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 4){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p>
                                投資を専門的に行なっているYoutuberの動画を見てです。
                                その人の意見を聞いて、買うタイミングや売るタイミングを決めています。
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 5){
                    return(
                        <div className="message-wrapper" onClick={this.props.forChange}>
                            <p>
                                なるほど、あなた自身で考えたというわけではないのですね。
                                ただ、ネットの情報を活用する力も非常に大事だと思いますよ。
                                では次の質問に移ります。
                            </p>
                        </div>
                    );
                }
                break;

            case 4: 
                if(this.state.phase === 0){
                    return(
                        <div className="message-wrapper"　onClick={this.countClick}>
                            <p>
                                私が学生時代に頑張ったことは趣味のゲームです。
                                私は対戦ゲームを極めており、変化し続ける状況の分析と最適解の発見を得意としています。
                                相手との駆け引きも得意で、かなりの腕前と自負しております。
                            </p>
                    </div>
                    );
                    }
                else
                if(this.state.phase === 1){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p>
                                頑張ったことで娯楽を持ってきたのは意外ですね。
                                お話を聞くところ、かなりの腕前をお持ちだと推測します。
                                何かそれを証明するような出来事はありますか？
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 2){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p>
                                はい、もちろんありますのでこれからお話しします。
                                関東で半年に一度開催される日本最大規模の大会で連覇を達成した経験があります。
                                尚、連覇を達成したのは私が初めてで界隈では有名になりました。
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 3){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p>
                                超大規模大会で初の連覇とは凄いですね。
                                先ほどの言葉の説得力が桁違いに増しましたよ。
                                ちなみに大会以外で他に何かされたことはありますか？
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 4){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p>
                                はい、最近私は企業と連携してコミュニティや配信事業の活性化に取り組んでいます。
                                有名配信者と直接コミュニケーションが取れるプラットフォームの提供に携わったり、
                                私自身も個人でプレイヤー同士の交流会を主催してその配信を行ったりしています。
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 5){
                    return(
                        <div className="message-wrapper" onClick={this.props.forChange}>
                            <p>
                                ゲームは競技人口が増えるほど娯楽としての価値や競技生も高まるので、
                                コミュニティの形成や配信に着眼した点は素晴らしいと思います。
                                あなたの分析力や思考力、洞察力をぜひ弊社でも生かしていただきたいです。
                                では次の質問に移ります。
                            </p>
                        </div>
                    );
                }
                    break;
            
            case 5: return 5; break;
            case 6: return 6; break;
            case 7: return 7; break;
            case 8: return 8; break;
            case 9: return 9; break;
            case 10: return 10; break;
            case 11: return 11; break;
            case 12: return 12; break;
            case 13: return 13; break;
            case 14: return 14; break;
            case 15: return 0; break;
            case 16: return 0; break;
            case 17: return 0; break;
            case 18: return 0; break;
            case 19: return 0; break;
            case 20: return 0; break;
            case 21: return 0; break;
            case 22: return 0; break;
            case 23: return 0; break;
            case 24: return 4; break;
        }
    }
    


    render(){
        const answerID = this.props.gameParams.answers.id[4*this.props.phase+this.props.chosenNumber];
        return(
            <div>{this.makeAnswerLog()}</div>
        )
        
    }
}

export default AnswerLog;