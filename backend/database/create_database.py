from init_database import Base,engine
import models

def init_db():
    import models
    Base.metadata.create_all(bind=engine)

init_db()