from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy.ext.declarative import declarative_base

#SQLiteを利用してDBを構築
engine = create_engine("sqlite:///database/interview_game.db")
#DB接続用のインスタンスを作成
db_session = scoped_session(sessionmaker(autocommit=False,autoflush=False,bind=engine))
#Baseオブジェクトを生成
Base = declarative_base()
#DBの情報を流し込む
Base.query = db_session.query_property()