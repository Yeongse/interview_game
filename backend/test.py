from database.models import Feedback
#import sys
#import pprint

#pprint.pprint(sys.path)
feedbacks = Feedback.query.all()
#feedbacks = feedbacks.text
print(feedbacks)