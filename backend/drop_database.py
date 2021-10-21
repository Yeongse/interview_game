from database.init_database import Base,engine
import database.models

def drop_db():
    Base.metadata.drop_all(bind=engine)

drop_db()