from init_database import db_session
from models import Character,Company,Member,Question,Answer,Feedback

feedbacks = Feedback.query.all()

for feedback in feedbacks:
    print(feedback.text)