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
                            </p>
                        </div>
                    );
                }
                break;
            
            case 5:
                if(this.state.phase === 0){
                    return(
                        <div className="message-wrapper"　onClick={this.countClick}>
                            <p>
                                私が御社を志望した理由は安定性を求めたからです。
                                やっぱり新卒で入って長く続けられるのは魅力だと思うので、
                                定年まで御社で安定した働き方をしたいと考えています。
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 1){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p>
                               弊社を安定した会社と見ていただき、嬉しいですね。
                               最近の新卒はすぐに辞める人が多いので、あなたのように続けてくれる人は歓迎です。
                               ただ、最近終身雇用というシステムがなくなるということはご存知なかったのでしょうか？ 
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 2){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p>
                                え、終身雇用って無くなるんですか？
                                まあ途中で辞めるとしてもある程度長くは働けそうなので大丈夫です。
                                クビにならない限りは続けます。
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 3){
                    return(
                        <div className="message-wrapper" onClick={this.props.forChange}>
                            <p>
                                強い意志をありがとうございます。
                                勝手に辞めないというのはこちらとしても非常に採用しやすいですね。
                                今日はたくさんの話をありがとうございました。
                            </p>
                        </div>
                    );
                    }
                break;

            case 6:
                if(this.state.phase === 0){
                    return(
                        <div className="message-wrapper"　onClick={this.countClick}>
                            <p>
                                私が御社を志望した理由は他のどの企業にも受からなかったからです。
                                不動産、金融、インフラなど様々な業界を志望しましたが、全て落ちました。
                                就職浪人するかもしれない危機の中、御社の求人を見かけたので応募しました。
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 1){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p>
                               たくさんの選考に応募されているんですね。
                               何度でも内定獲得を目指して応募を続けるメンタルの強さには感心します。
                               正直に話してくださるところもポイントが高いです。
                               ちなみに他の企業で選考に通らなかった理由は自分では何と考えますか？
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 2){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p>
                                え、終身雇用って無くなるんですか？
                                まあ途中で辞めるとしてもある程度長くは働けそうなので大丈夫です。
                                クビにならない限りは続けます。
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 3){
                    return(
                        <div className="message-wrapper" onClick={this.props.forChange}>
                            <p>
                                強い意志をありがとうございます。
                                勝手に辞めないというのはこちらとしても非常に採用しやすいですね。
                                今日はたくさんの話をありがとうございました。
                            </p>
                        </div>
                    );
                    }
                break;
            
            case 7:
                if(this.state.phase === 0){
                    return(
                        <div className="message-wrapper"　onClick={this.countClick}>
                            <p>
                                私が御社を志望した理由は、御社こそ私が成長できる環境であると考えたからです。
                                私は向上心に溢れており、どんな時もスキルアップを目指しています。
                                御社での勤務を通じて私は優秀なビジネスマンになりたいです。
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 1){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p>
                                弊社にそのような成長環境があると仰って頂き感激です。
                                実際のところは弊社は赤字が続いており、優秀な人材もほとんどいません。
                                あなたに対して成長環境を提供できるかは正直自信がないです。
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 2){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p>
                                そんなことはないと思いますよ。
                                万年赤字の御社を私の力で黒字にしたいと考えており、
                                この経験はまたとない成長の機会になると考えています。
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 3){
                    return(
                        <div className="message-wrapper" onClick={this.props.forChange}>
                            <p>
                                大変頼もしいお言葉をありがとうございます。
                                あなたは弊社できっとご活躍いただけると思います。
                                荷が重いかもしれませんがお願いしますね。
                            </p>
                        </div>
                    );
                    }
                break;
                
            case 8:
                if(this.state.phase === 0){
                    return(
                        <div className="message-wrapper"　onClick={this.countClick}>
                            <p>
                                私が御社を志望した理由は、御社の経営理念に惹かれたからです。
                                御社の経営理念である「衣食住の食を極める」がとても心に響きました。
                                一つのことにフォーカスする姿勢がかっこいいと思いました。
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 1){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p>
                                恐れ入りますが、弊社の経営理念は「衣食住の食を極める」ではないです。
                                「食品ロスを減らすことで、経済的にも精神的にも豊かにする」ですよ。
                                会社のホームページにも記載してあるのですが、ご覧になりましたか？
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 2){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p>
                                大変申し訳ありません、私が間違えておりました。
                                食品ロスは先進国で深刻な問題でした。
                                そのような課題に取り組むのが倫理的にも凄いと思いました。
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 3){
                    return(
                        <div className="message-wrapper" onClick={this.props.forChange}>
                            <p>
                                その場で考えたような回答に聞こえるのですが、まあいいでしょう。
                                今おっしゃったことを志望理由として私どもは受け取っておきます。
                            </p>
                        </div>
                    );
                    }
                break;
            
            case 9:
                if(this.state.phase === 0){
                    return(
                        <div className="message-wrapper"　onClick={this.countClick}>
                            <p>
                                マンホールの穴が丸い理由は蓋が穴に落ちないようにするためだと思います。
                                四角形だと蓋が傾いたりした際に落ちると思うのですが、丸だと落ちません。
                                安全性を考慮した上での丸だと思います。
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 1){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p>
                                今お答えになられたことがまさに正解です。
                                理由も含めて不足のない完璧な説明でした。
                                ちなみにこれは知っていたのですか？
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 2){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p>
                                いえ、知りませんでしたのでこの場で考えました。
                                まず、マンホールの蓋の形としてどのようなものがあるのか考えました。
                                丸と四角が思い浮かんだので、それの差異を考えることで結論を導きました。
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 3){
                    return(
                        <div className="message-wrapper" onClick={this.props.forChange}>
                            <p>
                                素晴らしい思考力ですね。
                                瞬時に客観的な視点で考察を行うことができるという力は、
                                ビジネスの場においても十分活躍できると思います。
                            </p>
                        </div>
                    );
                    }
                break;

            case 10:
                if(this.state.phase === 0){
                    return(
                        <div className="message-wrapper"　onClick={this.countClick}>
                            <p>
                                マンホールの穴が丸い理由は、「穴は丸い」という一般的なイメージからだと思います。
                                穴だと認識させることで一般人が危険に巻き込まれないように注意喚起していると思われます。
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 1){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p>
                                なるほど、正解ではないですが悪くない答えですね。
                                自身の知る常識と照らし合わせて理由を考えたのは良いですね。
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 2){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p>
                                外したにもかかわらず、お褒めいただきありがとうございます。
                                ちなみに正解を教えていただくことはできますでしょうか？
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 3){
                    return(
                        <div className="message-wrapper" onClick={this.props.forChange}>
                            <p>
                                正解はあえて言わないでおくので、後で調べてください。
                                調べる際に私のことを思い出してくれるといいかなと思っております。
                            </p>
                        </div>
                    );
                    }
                break;

            case 11:
                if(this.state.phase === 0){
                    return(
                        <div className="message-wrapper"　onClick={this.countClick}>
                            <p>
                                マンホールの穴が丸い理由は、蓋の製造コストが安いからだと思います。
                                丸はいろんな図形の中で最も面積が小さくなると考えています。
                                面積が小さいと値段も下がるので、これが理由と考えています。
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 1){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p>
                                理由もしっかりとした答えですが、残念ながら正解ではないです。
                                マンホールの蓋はそんな大量に作るものではないので、コストは気にしないです。
                                もっとマンホールの性質を考え直した方がいいと思います。
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 2){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p>
                                着眼点が全く的外れになってしまい、申し訳ありませんでした。
                                とりあえず今日は面接が終わったら、すぐに正解を調べようと思います。
                                自分の思考に足りない点を補強したいと考えています。
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 3){
                    return(
                        <div className="message-wrapper" onClick={this.props.forChange}>
                            <p>
                                ここで正解をすぐに聞かず自分で調べようとするのは立派ですね。
                                その習慣はこれからもぜひ持ち続けて欲しいものですね。
                            </p>
                        </div>
                    );
                    }
                break;

            case 12:
                if(this.state.phase === 0){
                    return(
                        <div className="message-wrapper"　onClick={this.countClick}>
                            <p>
                                マンホールの穴が丸い理由は、雨水がたまらないようにするためだと思います。
                                多角形だと頂点のところに固まってしまうところを、丸だと分散できます。
                                過剰に貯まるのを避けて、安全性を確保するのが狙いだと思います。
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 1){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p>
                                マンホール＝雨を想像されたんですね。
                                着眼点は悪くないですが、残念ながら正解ではないです。
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 2){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p>
                                物事に対する着眼点は昔からいいと自負しておりますので、本日はそれを発揮できてよかったです。
                                今度聞かれた時は正解を導けるように頑張りたいと思います。
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 3){
                    return(
                        <div className="message-wrapper" onClick={this.props.forChange}>
                            <p>
                                向上心は素晴らしいですね。
                                これからも引き続き頑張っていただきたいですね。
                            </p>
                        </div>
                    );
                    }
                break;

            case 13:
                if(this.state.phase === 0){
                    return(
                        <div className="message-wrapper"　onClick={this.countClick}>
                            <p>
                                お願いです、なんでもしますからこのペンを買ってください。
                                今このペンが売れないと母の手術代が無いんです。
                                お願いします、本当にお願いします。
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 1){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p>
                                泣き落としですか、今の時代珍しいですね。
                                母の手術代は残念ですが、泣き落としでは私は買いませんよ。
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 2){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p>
                                靴も舐めますし、土下座もします。
                                お子さんの送り迎えも、奥さんへのマッサージもします。
                                本当になんでもするので、このペンだけ買ってください。
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 3){
                    return(
                        <div className="message-wrapper" onClick={this.props.forChange}>
                            <p>
                                最初から最後まで徹底して泣き落としするんですね。
                                泣き落としは必ずいいとは言えませんが、貫く姿勢は評価に値します。
                                手強い質問でしたが、ご回答ありがとうございました。
                            </p>
                        </div>
                    );
                    }
                break;

            case 14:
                if(this.state.phase === 0){
                    return(
                        <div className="message-wrapper"　onClick={this.countClick}>
                            <p>
                                これからこのペンの長所をお伝えします。
                                このペンはインクが長時間持ち、2年は買い替える必要はないです。
                                また、ペン先の走り心地がよくどんな紙にでもすらすらと書けます。
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 1){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p>
                                そのペンにはそんな長所があったんですね。
                                紙面問わず書きやすいのは魅力に思います。
                                インクは使う頻度によっても減り方が変わるので、2年持つと断言は難しいのではないでしょうか？
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 2){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p>
                                そうですね、確かに断言はできないですね。
                                一般的なペンに比べて3倍長く持つという表現に変えましょう。
                                これでいかがでしょうか？
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 3){
                    return(
                        <div className="message-wrapper" onClick={this.props.forChange}>
                            <p>
                                そちらの方がわかりやすくていいです。
                                長所をわかりやすく語られると、購買意欲がそそられますね。
                                いい売り込みをありがとうございます。
                            </p>
                        </div>
                    );
                    }
                break;

            case 15:
                if(this.state.phase === 0){
                    return(
                        <div className="message-wrapper"　onClick={this.countClick}>
                            <p>
                                マンホールの穴が丸い理由は、雨水がたまらないようにするためだと思います。
                                多角形だと頂点のところに固まってしまうところを、丸だと分散できます。
                                過剰に貯まるのを避けて、安全性を確保するのが狙いだと思います。
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 1){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p>
                                マンホール＝雨を想像されたんですね。
                                着眼点は悪くないですが、残念ながら正解ではないです。
                            </p>
                    </div>
                    );
                }
                else
                if(this.state.phase === 2){
                    return(
                        <div className="message-wrapper" onClick={this.countClick}>
                            <p>
                                物事に対する着眼点は昔からいいと自負しておりますので、本日はそれを発揮できてよかったです。
                                今度聞かれた時は正解を導けるように頑張りたいと思います。
                            </p>
                        </div>
                    );
                }
                else
                if(this.state.phase === 3){
                    return(
                        <div className="message-wrapper" onClick={this.props.forChange}>
                            <p>
                                向上心は素晴らしいですね。
                                これからも引き続き頑張っていただきたいですね。
                            </p>
                        </div>
                    );
                    }
                break;
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
            <div>{this.makeAnswerLog(answerID)}</div>
        )
        
    }
}

export default AnswerLog;