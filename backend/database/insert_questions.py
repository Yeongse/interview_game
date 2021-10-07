from database.init_database import db_session
from database.models import Question

def insert_questions():
    question1 = Question(1,"学生時代に頑張ったことはなんですか？")
    question2 = Question(1,"弊社の志望理由はなんですか？")
    question3 = Question(2,"マンホールの蓋が丸いのは何故だと思いますか？")
    question4 = Question(2,"このペンを私に売ってください。")
    question5 = Question(3,"今100万円をもらえたら何しますか？")
    question6 = Question(3,"好きな四字熟語を教えてください。")

    db_session.add(question1)
    db_session.add(question2)
    db_session.add(question3)
    db_session.add(question4)
    db_session.add(question5)
    db_session.add(question6)
    db_session.commit()