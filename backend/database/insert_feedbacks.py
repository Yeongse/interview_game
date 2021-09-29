from init_database import db_session
from models import Feedback

fb1 = Feedback("開発者によるテストメッセージです。みんなのフィードバックはこのように表示されます。")

db_session.add(fb1)
db_session.commit()