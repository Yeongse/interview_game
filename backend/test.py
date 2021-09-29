from database.models import Feedback
feedbacks = Feedback.query().all()
feedbacks = feedbacks.text
print(feedbacks)