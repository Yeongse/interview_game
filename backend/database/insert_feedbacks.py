from database.init_database import db_session
from database.models import Feedback

def insert_feedbacks():
    feedback1 = Feedback("開発者によるテストメッセージです。みんなのフィードバックはこのように表示されます。")

    db_session.add(feedback1)
    db_session.commit()