from database.models import Answer,Character,Company,Feedback,Member,Question
from database.init_database import db_session

db_session.query(Member,Company).join(テーブル1, テーブル1.id == テーブル2.hoge_id)