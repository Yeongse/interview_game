from init_database import db_session
from models import QuestionGroup

q_gr1 = QuestionGroup()
q_gr2 = QuestionGroup()
q_gr3 = QuestionGroup()

db_session.add(q_gr1)
db_session.add(q_gr2)
db_session.add(q_gr3)
db_session.commit()