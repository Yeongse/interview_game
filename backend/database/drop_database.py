from init_database import Base,engine
import models

def drop_db():
    import models
    Base.metadata.drop_all(bind=engine)

drop_db()