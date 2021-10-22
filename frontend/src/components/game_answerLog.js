import "./components.css"
import React from "react";

//props:answerID, gameParams, forChange
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
                            <p className="firstPerson">
                                <p>私が学生時代に頑張ったことは飲食店でのアルバイトです。</p>
                                <p>私は大学の3回生からこのアルバイトを始めたのですが、現在で4ヶ月続けています。</p>
                                <p>現場を指揮するリーダー的存在だと自負しております。</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 1){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="secondPerson">
                                <p>なるほど、現場のリーダーですか。それはとても頼もしいですね。</p>
                                <p>現場を指揮してくれているとお聞きましたが、具体的にはどのようなことをしていますか？</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 2){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>えーっと、何かあれば社員さんからの指示をすぐに他のアルバイトに伝えるようにしています。</p>
                                <p>また、皿洗いやホールの業務もちゃんとするように言っています。</p>
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 3){
                    return(
                        <div className="message-wrapper" onClick={this.props.forChange}>
                            <p className="secondPerson">
                                <p>まだ少し抽象的ですが、まあ良いでしょう。</p>
                                <p>たくさんのお話をありがとうございました。大変参考になりました。</p>
                            </p>
                        </div>
                    );
                }
                break;

            case 2: 
                if(this.state.phase === 0){
                    return(
                        <div className="message-wrapper"　onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>私が学生時代に頑張ったことは大学の勉強です。</p>
                                <p>私はたくさんの授業を履修して単位を取得することに成功しました。</p>
                                <p>私はその過程でWordとExcelの使い方をマスターしています。</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 1){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="secondPerson">
                                <p>なるほど、勉強は学生の本分なのでそれを頑張ったのは素晴らしいです。</p>
                                <p>きっちりと単位も取得していて申し分ないと思います。</p>
                                <p>ちなみにWordやExcelはかなりできるとお聞きしましたが、</p>
                                <p>マクロの定義や文書に鍵をかけるといったことはしたことがありますか？</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 2){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>えっと、マクロですね。はい、あります。</p>
                                <p>文章の中の文字を大きくしたり色を変えたりはできます。</p>
                                <p>鍵をかけるというのは全然わからないです。</p>
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 3){
                    return(
                        <div className="message-wrapper" onClick={this.props.forChange}>
                            <p className="secondPerson">
                                <p>なるほど、ありがとうございます。</p>
                                <p>ちなみにマクロは文字を大きくすることではないですよ。</p>
                                <p>今行ったことは実際の業務で使う機能だと思うので、ぜひ勉強してみてください。</p>
                            </p>
                        </div>
                    );
                }
                break;
            
            case 3: 
                if(this.state.phase === 0){
                    return(
                        <div className="message-wrapper"　onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>私が学生時代に頑張ったことは株式投資です。</p>
                                <p>社会人になる前にお金の勉強をしたいと考え、始めました。</p>
                                <p>結果的には損をしましたが、学ぶこともありました。</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 1){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="secondPerson">
                                <p>なるほど、株式投資とは意識が高いですね。</p>
                                <p>個人投資家が利益を出すのは難しいので、損をしても仕方がないと思いますよ。</p>
                                <p>ちなみにこの経験からどのような学びを得たんですか？</p>
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 2){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>損はしても仕方ないと割り切るのが大事だと思いました。</p>
                                <p>また、上がる時ははっきり上がる、下がる時もちゃんと下がるということもわかりました。</p>
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 3){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="secondPerson">
                                <p>失敗を恐れないその心はとてもいいと思います。</p>
                                <p>ちなみに株価が上がるとか下がるとかというのはどのように判別していたんでしょうか？</p>
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 4){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>投資を専門的に行なっているYoutuberの動画を見てです。</p>
                                <p>その人の意見を聞いて、買うタイミングや売るタイミングを決めています。</p>
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 5){
                    return(
                        <div className="message-wrapper" onClick={this.props.forChange}>
                            <p className="secondPerson">
                                <p>なるほど、あなた自身で考えたというわけではないのですね。</p>
                                <p>ただ、ネットの情報を活用する力も非常に大事だと思いますよ。</p>
                            </p>
                        </div>
                    );
                }
                break;

            case 4: 
                if(this.state.phase === 0){
                    return(
                        <div className="message-wrapper"　onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>私が学生時代に頑張ったことは趣味のゲームです。</p>
                                <p>私は対戦ゲームを極めており、変化し続ける状況の分析と最適解の発見を得意としています。</p>
                                <p>相手との駆け引きも得意で、かなりの腕前と自負しております。</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 1){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="secondPerson">
                                <p>頑張ったことで娯楽を持ってきたのは意外ですね。</p>
                                <p>お話を聞くところ、かなりの腕前をお持ちだと推測します。</p>
                                <p>何かそれを証明するような出来事はありますか？</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 2){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>はい、もちろんありますのでこれからお話しします。</p>
                                <p>関東で半年に一度開催される日本最大規模の大会で連覇を達成した経験があります。</p>
                                <p>尚、連覇を達成したのは私が初めてで界隈では有名になりました。</p>
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 3){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="secondPerson">
                                <p>超大規模大会で初の連覇とは凄いですね。</p>
                                <p>先ほどの言葉の説得力が桁違いに増しましたよ。</p>
                                <p>ちなみに大会以外で他に何かされたことはありますか？</p>
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 4){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>はい、最近私は企業と連携してコミュニティや配信事業の活性化に取り組んでいます。</p>
                                <p>有名配信者と直接コミュニケーションが取れるプラットフォームの提供に携わったり、</p>
                                <p>私自身も個人でプレイヤー同士の交流会を主催してその配信を行ったりしています。</p>
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 5){
                    return(
                        <div className="message-wrapper" onClick={this.props.forChange}>
                            <p className="secondPerson">
                                <p>ゲームは競技人口が増えるほど娯楽としての価値や競技生も高まるので、</p>
                                <p>コミュニティの形成や配信に着眼した点は素晴らしいと思います。</p>
                                <p>あなたの分析力や思考力、洞察力をぜひ弊社でも生かしていただきたいです。</p>
                            </p>
                        </div>
                    );
                }
                break;
            
            case 5:
                if(this.state.phase === 0){
                    return(
                        <div className="message-wrapper"　onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>私が御社を志望した理由は安定性を求めたからです。</p>
                                <p>やっぱり新卒で入って長く続けられるのは魅力だと思うので、</p>
                                <p>定年まで御社で安定した働き方をしたいと考えています。</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 1){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="secondPerson">
                               <p>弊社を安定した会社と見ていただき、嬉しいですね。</p>
                               <p>最近の新卒はすぐに辞める人が多いので、あなたのように続けてくれる人は歓迎です。</p>
                               <p>ただ、最近終身雇用というシステムがなくなるということはご存知なかったのでしょうか？ </p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 2){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>え、終身雇用って無くなるんですか？</p>
                                <p>まあ途中で辞めるとしてもある程度長くは働けそうなので大丈夫です。</p>
                                <p>クビにならない限りは続けます。</p>
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 3){
                    return(
                        <div className="message-wrapper" onClick={this.props.forChange}>
                            <p className="secondPerson">
                                <p>強い意志をありがとうございます。</p>
                                <p>勝手に辞めないというのはこちらとしても非常に採用しやすいですね。</p>
                                <p>今日はたくさんの話をありがとうございました。</p>
                            </p>
                        </div>
                    );
                    }
                break;

            case 6:
                if(this.state.phase === 0){
                    return(
                        <div className="message-wrapper"　onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>私が御社を志望した理由は他のどの企業にも受からなかったからです。</p>
                                <p>不動産、金融、インフラなど様々な業界を志望しましたが、全て落ちました。</p>
                                <p>就職浪人するかもしれない危機の中、御社の求人を見かけたので応募しました。</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 1){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="secondPerson">
                               <p>たくさんの選考に応募されているんですね。</p>
                               <p>何度でも内定獲得を目指して応募を続けるメンタルの強さには感心します。</p>
                               <p>正直に話してくださるところもポイントが高いです。</p>
                               <p>ちなみに他の企業で選考に通らなかった理由は自分では何と考えますか？</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 2){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>うまく誤魔化したりができず、なんでも正直に言ってしまうからだと思います。</p>
                                <p>しかしこれは悪いこととは思っていないので、正直さを受け入れてくれる会社を探しています。</p>
                                <p>恐れ多いですが、御社には正直者で素直な私を受け入れていただきたいです。</p>
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 3){
                    return(
                        <div className="message-wrapper" onClick={this.props.forChange}>
                            <p className="secondPerson">
                                <p>正直で素直な方は大歓迎です。</p>
                                <p>中途半端に能力があって調子に乗る人よりも、真面目で忠実な人を弊社は欲していますよ。</p>
                                <p>あなたの誠実さは伝わりました、今日はたくさんの話をありがとうございました。</p>
                            </p>
                        </div>
                    );
                    }
                break;
            
            case 7:
                if(this.state.phase === 0){
                    return(
                        <div className="message-wrapper"　onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>私が御社を志望した理由は、御社こそ私が成長できる環境であると考えたからです。</p>
                                <p>私は向上心に溢れており、どんな時もスキルアップを目指しています。</p>
                                <p>御社での勤務を通じて私は優秀なビジネスマンになりたいです。</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 1){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="secondPerson">
                                <p>弊社にそのような成長環境があると仰って頂き感激です。</p>
                                <p>実際のところは弊社は赤字が続いており、優秀な人材もほとんどいません。</p>
                                <p>あなたに対して成長環境を提供できるかは正直自信がないです。</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 2){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>そんなことはないと思いますよ。</p>
                                <p>万年赤字の御社を私の力で黒字にしたいと考えており、</p>
                                <p>この経験はまたとない成長の機会になると考えています。</p>
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 3){
                    return(
                        <div className="message-wrapper" onClick={this.props.forChange}>
                            <p className="secondPerson">
                                <p>大変頼もしいお言葉をありがとうございます。</p>
                                <p>あなたは弊社できっとご活躍いただけると思います。</p>
                                <p>荷が重いかもしれませんがお願いしますね。</p>
                            </p>
                        </div>
                    );
                    }
                break;
                
            case 8:
                if(this.state.phase === 0){
                    return(
                        <div className="message-wrapper"　onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>私が御社を志望した理由は、御社の経営理念に惹かれたからです。</p>
                                <p>御社の経営理念である「衣食住の食を極める」がとても心に響きました。</p>
                                <p>一つのことにフォーカスする姿勢がかっこいいと思いました。</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 1){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="secondPerson">
                                <p>恐れ入りますが、弊社の経営理念は「衣食住の食を極める」ではないです。</p>
                                <p>「食品ロスを減らすことで、経済的にも精神的にも豊かにする」ですよ。</p>
                                <p>会社のホームページにも記載してあるのですが、ご覧になりましたか？</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 2){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>大変申し訳ありません、私が間違えておりました。</p>
                                <p>食品ロスは先進国で深刻な問題でした。</p>
                                <p>そのような課題に取り組むのが倫理的にも凄いと思いました。</p>
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 3){
                    return(
                        <div className="message-wrapper" onClick={this.props.forChange}>
                            <p className="secondPerson">
                                <p>その場で考えたような回答に聞こえるのですが、まあいいでしょう。</p>
                                <p>今おっしゃったことを志望理由として私どもは受け取っておきます。</p>
                            </p>
                        </div>
                    );
                    }
                break;
            
            case 9:
                if(this.state.phase === 0){
                    return(
                        <div className="message-wrapper"　onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>マンホールの穴が丸い理由は蓋が穴に落ちないようにするためだと思います。</p>
                                <p>四角形だと蓋が傾いたりした際に落ちると思うのですが、丸だと落ちません。</p>
                                <p>安全性を考慮した上での丸だと思います。</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 1){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="secondPerson">
                                <p>今お答えになられたことがまさに正解です。</p>
                                <p>理由も含めて不足のない完璧な説明でした。</p>
                                <p>ちなみにこれは知っていたのですか？</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 2){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>いえ、知りませんでしたのでこの場で考えました。</p>
                                <p>まず、マンホールの蓋の形としてどのようなものがあるのか考えました。</p>
                                <p>丸と四角が思い浮かんだので、それの差異を考えることで結論を導きました。</p>
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 3){
                    return(
                        <div className="message-wrapper" onClick={this.props.forChange}>
                            <p className="secondPerson">
                                <p>素晴らしい思考力ですね。</p>
                                <p>瞬時に客観的な視点で考察を行うことができるという力は、</p>
                                <p>ビジネスの場においても十分活躍できると思います。</p>
                            </p>
                        </div>
                    );
                    }
                break;

            case 10:
                if(this.state.phase === 0){
                    return(
                        <div className="message-wrapper"　onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>マンホールの穴が丸い理由は、「穴は丸い」という一般的なイメージからだと思います。</p>
                                <p>穴だと認識させることで一般人が危険に巻き込まれないように注意喚起していると思われます。</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 1){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="secondPerson">
                                <p>なるほど、正解ではないですが悪くない答えですね。</p>
                                <p>自身の知る常識と照らし合わせて理由を考えたのは良いですね。</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 2){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>外したにもかかわらず、お褒めいただきありがとうございます。</p>
                                <p>ちなみに正解を教えていただくことはできますでしょうか？</p>
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 3){
                    return(
                        <div className="message-wrapper" onClick={this.props.forChange}>
                            <p className="secondPerson">
                                <p>正解はあえて言わないでおくので、後で調べてください。</p>
                                <p>調べる際に私のことを思い出してくれるといいかなと思っております。</p>
                            </p>
                        </div>
                    );
                    }
                break;

            case 11:
                if(this.state.phase === 0){
                    return(
                        <div className="message-wrapper"　onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>マンホールの穴が丸い理由は、蓋の製造コストが安いからだと思います。</p>
                                <p>丸はいろんな図形の中で最も面積が小さくなると考えています。</p>
                                <p>面積が小さいと値段も下がるので、これが理由と考えています。</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 1){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="secondPerson">
                                <p>理由もしっかりとした答えですが、残念ながら正解ではないです。</p>
                                <p>マンホールの蓋はそんな大量に作るものではないので、コストは気にしないです。</p>
                                <p>もっとマンホールの性質を考え直した方がいいと思います。</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 2){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>着眼点が全く的外れになってしまい、申し訳ありませんでした。</p>
                                <p>とりあえず今日は面接が終わったら、すぐに正解を調べようと思います。</p>
                                <p>自分の思考に足りない点を補強したいと考えています。</p>
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 3){
                    return(
                        <div className="message-wrapper" onClick={this.props.forChange}>
                            <p className="secondPerson">
                                <p>ここで正解をすぐに聞かず自分で調べようとするのは立派ですね。</p>
                                <p>その習慣はこれからもぜひ持ち続けて欲しいものですね。</p>
                            </p>
                        </div>
                    );
                    }
                break;

            case 12:
                if(this.state.phase === 0){
                    return(
                        <div className="message-wrapper"　onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>マンホールの穴が丸い理由は、雨水がたまらないようにするためだと思います。</p>
                                <p>多角形だと頂点のところに固まってしまうところを、丸だと分散できます。</p>
                                <p>過剰に貯まるのを避けて、安全性を確保するのが狙いだと思います。</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 1){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="secondPerson">
                                <p>マンホール＝雨を想像されたんですね。</p>
                                <p>着眼点は悪くないですが、残念ながら正解ではないです。</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 2){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>物事に対する着眼点は昔からいいと自負しておりますので、本日はそれを発揮できてよかったです。</p>
                                <p>今度聞かれた時は正解を導けるように頑張りたいと思います。</p>
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 3){
                    return(
                        <div className="message-wrapper" onClick={this.props.forChange}>
                            <p className="secondPerson">
                                <p>向上心は素晴らしいですね。</p>
                                <p>これからも引き続き頑張っていただきたいですね。</p>
                            </p>
                        </div>
                    );
                    }
                break;

            case 13:
                if(this.state.phase === 0){
                    return(
                        <div className="message-wrapper"　onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>お願いです、なんでもしますからこのペンを買ってください。</p>
                                <p>今このペンが売れないと母の手術代が無いんです。</p>
                                <p>お願いします、本当にお願いします。</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 1){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="secondPerson">
                                <p>泣き落としですか、今の時代珍しいですね。</p>
                                <p>母の手術代は残念ですが、泣き落としでは私は買いませんよ。</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 2){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>靴も舐めますし、土下座もします。</p>
                                <p>お子さんの送り迎えも、奥さんへのマッサージもします。</p>
                                <p>本当になんでもするので、このペンだけ買ってください。</p>
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 3){
                    return(
                        <div className="message-wrapper" onClick={this.props.forChange}>
                            <p className="secondPerson">
                                <p>最初から最後まで徹底して泣き落としするんですね。</p>
                                <p>泣き落としは必ずいいとは言えませんが、貫く姿勢は評価に値します。</p>
                                <p>手強い質問でしたが、ご回答ありがとうございました。</p>
                            </p>
                        </div>
                    );
                    }
                break;

            case 14:
                if(this.state.phase === 0){
                    return(
                        <div className="message-wrapper"　onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>これからこのペンの長所をお伝えします。</p>
                                <p>このペンはインクが長時間持ち、2年は買い替える必要はないです。</p>
                                <p>また、ペン先の走り心地がよくどんな紙にでもすらすらと書けます。</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 1){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="secondPerson">
                                <p>そのペンにはそんな長所があったんですね。</p>
                                <p>紙面問わず書きやすいのは魅力に思います。</p>
                                <p>インクは使う頻度によっても減り方が変わるので、2年持つと断言は難しいのではないでしょうか？</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 2){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>そうですね、確かに断言はできないですね。</p>
                                <p>一般的なペンに比べて3倍長く持つという表現に変えましょう。</p>
                                <p>これでいかがでしょうか？</p>
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 3){
                    return(
                        <div className="message-wrapper" onClick={this.props.forChange}>
                            <p className="secondPerson">
                                <p>そちらの方がわかりやすくていいです。</p>
                                <p>長所をわかりやすく語られると、購買意欲がそそられますね。</p>
                                <p>いい売り込みをありがとうございます。</p>
                            </p>
                        </div>
                    );
                    }
                break;

            case 15:
                if(this.state.phase === 0){
                    return(
                        <div className="message-wrapper"　onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>このペンを買いたいという気持ちはどこから来るか知っていますか？</p>
                                <p>それはすなわち心です。これから私はあなたの心に語りかけます。</p>
                                <p>私の強い思いは必ずあなたに届くと信じています。</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 1){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="secondPerson">
                                <p>何がしたいのかよくわかりませんが、珍しいアプローチですね。</p>
                                <p>多分買うことはないと思いますが話だけは聞きましょう。</p>
                                <p>それではお話を続けてくだいさい。</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 2){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>売り込みに注いでいる私の情熱を見てください。</p>
                                <p>もう他のことはなんでもいいかのように販売に集中していますよね。</p>
                                <p>こんなに頑張っている人を応援したくはありませんか？</p>
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 3){
                    return(
                        <div className="message-wrapper" onClick={this.props.forChange}>
                            <p className="secondPerson">
                                <p>精神論的なもので訴えようとしていたのですね、やっと理解しました。</p>
                                <p>ただ、私には人間の感情というものがないので通用しませんよ。</p>
                                <p>回答は以上で大丈夫です、ありがとうございました。</p>
                            </p>
                        </div>
                    );
                    }
                break;

            case 16:
                if(this.state.phase === 0){
                    return(
                        <div className="message-wrapper"　onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>今からこのペンを販売するにあたって、あなたに質問をします。</p>
                                <p>このペンを買わないという選択を取るならば、その理由を説明してください。</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 1){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="secondPerson">
                                <p>そう来ましたか、いいですね。</p>
                                <p>単純に今ペンを持っていて余分なものがいらないので買わないです。</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 2){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>でも十分な数を持っているとは言えないですよね？</p>
                                <p>急にペンが折れる場合やインクが乾いて使い物にならなくなる場合もあります。</p>
                                <p>そういった状況に備えて、一本、このペンを用意しておくといいと思います。</p>
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 3){
                    return(
                        <div className="message-wrapper" onClick={this.props.forChange}>
                            <p className="secondPerson">
                                <p>言われてみればそうですね。普段は何かあれば周囲の人に頼んでいました。</p>
                                <p>自分で余分に持っていればその問題が解決できるのはいいですね。</p>
                                <p>回答ありがとうございました。</p>
                            </p>
                        </div>
                    );
                    }
                break;

            case 17:
                if(this.state.phase === 0){
                    return(
                        <div className="message-wrapper"　onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>私は今100万円をもらったら必ず貯金します。</p>
                                <p>こんな大金を常に持っていれば、将来の不測の事態に対応できると思います。</p>
                                <p>コロナ禍では貯金の需要がより一層高まっていると考えています。</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 1){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="secondPerson">
                                <p>不安定な未来への保険として貯金するのですね。</p>
                                <p>ちなみに100万円は大金ではなく、生活に十分な金額ではないと思いますよ。</p>
                                <p>本当に100万円だけで様々な問題に対応できると考えているのですか？</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 2){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>これだけで十分な金額だとは私も思っていません。</p>
                                <p>あくまでも緊急時の足しとして貯金をするだけです。</p>
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 3){
                    return(
                        <div className="message-wrapper" onClick={this.props.forChange}>
                            <p className="secondPerson">
                                <p>そこが理解できているのなら大きな問題はありませんね。</p>
                                <p>このような場合だと貯金は悪くはない使い方ですね。</p>
                            </p>
                        </div>
                    );
                    }
                break;
                
            case 18:
                if(this.state.phase === 0){
                    return(
                        <div className="message-wrapper"　onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>私は100万円を活用して自分磨きの勉強を行いたいと考えています。</p>
                                <p>お金は投資することでその価値を何倍にも増やすことができます。</p>
                                <p>自分の能力に投資をすることで価値の最大化を目指します。</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 1){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="secondPerson">
                                <p>お金をもらうとまず自己投資を思いつくとは素晴らしいですね。</p>
                                <p>ちなみに過去にはどのような事をどれくらい勉強したんですか？</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 2){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>はい、過去には筋トレやプログラミングの勉強を独学でしていました。</p>
                                <p>どちらも1ヶ月ほどしっかりと続けました。</p>
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 3){
                    return(
                        <div className="message-wrapper" onClick={this.props.forChange}>
                            <p className="secondPerson">
                                <p>1ヶ月とはとても短くて決して身についたとは言えませんね。</p>
                                <p>今の話を聞くと、本当にお金で自己研鑽をするのか疑わしくなってきました。</p>
                                <p>この質問に関してはこのくらいで十分です、ありがとうございました。</p>
                            </p>
                        </div>
                    );
                    }
                break;

            case 19:
                if(this.state.phase === 0){
                    return(
                        <div className="message-wrapper"　onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>私は100万円があると豪遊して最高に楽しい時間を過ごします。</p>
                                <p>そしてこの時間を今後の人生で頑張る糧にしたいと思います。</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 1){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="secondPerson">
                                <p>あなたのその正直なところは非常に評価に値します。</p>
                                <p>豪遊したいとのことですが、具体的にどのようなことをされたいのですか？</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 2){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>嘘をつかない事を心情に生きて来たので、そこを褒めていただいて嬉しいです。</p>
                                <p>お金で高いお酒と女を買いたいと思っています。</p>
                                <p>社長達がよくやるような遊びをしたいです。</p>
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 3){
                    return(
                        <div className="message-wrapper" onClick={this.props.forChange}>
                            <p className="secondPerson">
                                <p>確かにそのようなことをするには100万円は丁度いいですね。</p>
                                <p>あなたの考えは声を大にして賞賛できるものではありませんが、理にかなっていますね。</p>
                                <p>個人的には結構好きなアイデアでしたよ。</p>
                            </p>
                        </div>
                    );
                    }
                break;

            case 20:
                if(this.state.phase === 0){
                    return(
                        <div className="message-wrapper"　onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>もしも私が100万円を持つと、すぐに競馬に全額を注ぎ込みます。</p>
                                <p>リスクを冒してでもやはり大金を稼ぎたいと思います。</p>
                                <p>私はお金はさらなるお金を儲けるための道具と考えているので、迷わず投資します。</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 1){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="secondPerson">
                                <p>競馬がいいかどうかは置いておいて、投資に関する姿勢はいいですね。</p>
                                <p>お金はさらなるお金を儲ける道具というのはまさにその通りだと私も思いますよ。</p>
                                <p>一応お聞きしますが、100万円をすっても大丈夫なんですか？</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 2){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>仮に0円になったとしても、私は全然気にしないです。</p>
                                <p>単純に競馬をしているのは楽しいのもあるのでね。</p>
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 3){
                    return(
                        <div className="message-wrapper" onClick={this.props.forChange}>
                            <p className="secondPerson">
                                <p>あなたにとって楽しみながらお金を稼げる手段が競馬というわけですね。</p>
                                <p>その判断基準は私も良いと思いますのでこれからも続けてください。</p>
                            </p>
                        </div>
                    );
                    }
                break;

            case 21:
                if(this.state.phase === 0){
                    return(
                        <div className="message-wrapper"　onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>私が好きな四字熟語は「酒池肉林」です。</p>
                                <p>私は飲んだり食べたりワイワイするのが大好きでいつも幹事をやります。</p>
                                <p>そんな私にぴったりな言葉だと思い、好きになりました。</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 1){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="secondPerson">
                                <p>確かにあなたは飲み会で話を回せるタイプの人に見えますね。</p>
                                <p>今はコロナ禍で全然そのような会を催せないのは辛いですよね。</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 2){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>それは本当にそうです。</p>
                                <p>リモート飲み会なども一時期流行りましたが、私は楽しめませんでした。</p>
                                <p>コロナが落ち着き御社に入社したら、盛り上げ役として大活躍したいです。</p>
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 3){
                    return(
                        <div className="message-wrapper" onClick={this.props.forChange}>
                            <p className="secondPerson">
                                <p>うちの役員連中はそういう人は大歓迎です。</p>
                                <p>仕事ができるかよりもそっちの方を大事にしているくらいです。</p>
                                <p>あなたの入社を楽しみにしています。</p>
                            </p>
                        </div>
                    );
                    }
                break;

            case 22:
                if(this.state.phase === 0){
                    return(
                        <div className="message-wrapper"　onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>私が好きな四字熟語は「一生懸命」です。</p>
                                <p>ひたむきに頑張る人間の姿というものはいつも美しいものだと思います。</p>
                                <p>この四字熟語は努力を描写した良い表現だと思います。</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 1){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="secondPerson">
                                <p>あなた自身が頑張ったことがなさそうなので、あまり共感できない単語だと思ったのですが。</p>
                                <p>あと、急に文学者っぽく語られたので少し困惑しました。</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 2){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>私はバイトや勉強などを頑張っていましたよ？</p>
                                <p>一方で少し調子に乗った言い方をしたのは申し訳ありませんでした。</p>
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 3){
                    return(
                        <div className="message-wrapper" onClick={this.props.forChange}>
                            <p className="secondPerson">
                                <p>それは知っていますが、どれも続いておらず目立った結果につながっていないですよね。</p>
                                <p>この回答は適当に思いついた薄っぺらいものだと考えておきます。</p>
                            </p>
                        </div>
                    );
                    }
                break;

            case 23:
                if(this.state.phase === 0){
                    return(
                        <div className="message-wrapper"　onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>私が好きな四字熟語は「泰然自若」です。</p>
                                <p>男という生き物はどっしりと構えているのがかっこいいと思っています。</p>
                                <p>何事にも動じず、常に落ち着いた大人になりたいと考えています。</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 1){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="secondPerson">
                                <p>良い言葉ですが、適度な緊張や感受性も持った方がいいと私は思いますよ。</p>
                                <p>そういう人の方が人当たりが良く、可愛がられます。</p>
                                <p>この要素はあなたが思うよりも社会人で大事なポイントですよ。</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 2){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>大変勉強になります、ありがとうございます。</p>
                                <p>一つの方が必ずしも正しいと思わないようにします。</p>
                                <p>臨機応変に、時と場合に応じて柔軟に考え方を変えようと思います。</p>
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 3){
                    return(
                        <div className="message-wrapper" onClick={this.props.forChange}>
                            <p className="secondPerson">
                                <p>私もそれがいいと思います。</p>
                                <p>ついでに好きな四字熟語も「臨機応変」とかに変えておくといいと思いますよ。</p>
                            </p>
                        </div>
                    );
                    }
                break;

            case 24:
                if(this.state.phase === 0){
                    return(
                        <div className="message-wrapper"　onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>私が好きな四字熟語は「以心伝心」です。</p>
                                <p>お互いの心を通わせることができるというのは素晴らしいと思います。</p>
                                <p>私にもそのような友人がいたのですが、ある事件をきっかけに縁が切れました。</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 1){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="secondPerson">
                                <p>以心伝心はいい言葉ですね、私も好きな四字熟語です。</p>
                                <p>ちなみにある事件というのを簡単に教えてくれますか？</p>
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 2){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p className="firstPerson">
                                <p>一言で言うと、私がその子のお母さんとデキてしまったんです。</p>
                                <p>当時シングルマザーで美人だったので、熟女好きの私にはたまりませんでした。</p>
                                <p>後日この事実を知った友人は激昂し、縁が切れました。</p>
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 3){
                    return(
                        <div className="message-wrapper" onClick={this.props.forChange}>
                            <p className="secondPerson">
                                <p>それは100%あなたが悪いですね、反省してください。</p>
                                <p>でも熟女好きは悪くないと思います。</p>
                                <p>お金持ちのおばあちゃん達を相手にできるなら、弊社にもポジションがあるかもしれません。</p>
                            </p>
                        </div>
                    );
                    }
                break;
        }
    }
    

    render(){
        return(
            <div>{this.makeAnswerLog(this.props.answerID)}</div>
        )
    }
}

export default AnswerLog;