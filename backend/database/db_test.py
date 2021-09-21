from init_database import db_session
from models import Character,Company,Member,Question,Answer

answers = Answer.query.all()

for answer in answers:
    print(answer.text)