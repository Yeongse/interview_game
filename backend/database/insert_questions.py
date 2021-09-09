from init_database import db_session
from models import Question

ques1 = Question(1,"学生時代に頑張ったことはなんですか？")
ques2 = Question(1,"弊社の志望理由はなんですか？")
ques3 = Question(2,"マンホールの蓋が丸いのは何故だと思いますか？")
ques4 = Question(2,"このペンを私に売ってください。")
ques5 = Question(3,"今100万円をもらえたら何しますか？")
ques6 = Question(3,"好きな四字熟語を教えてください。")

db_session.add(ques1)
db_session.add(ques2)
db_session.add(ques3)
db_session.add(ques4)
db_session.commit()