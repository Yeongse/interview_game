from database.init_database import db_session

from database.insert_answers         import insert_answers
from database.insert_characters      import insert_characters
from database.insert_companies       import insert_companies
from database.insert_feedbacks       import insert_feedbacks
from database.insert_members         import insert_members
from database.insert_questions       import insert_questions

insert_answers()
insert_characters()
insert_companies()
insert_feedbacks()
insert_members()
insert_questions()