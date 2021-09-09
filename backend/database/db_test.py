from init_database import db_session
from models import Character,Company,Member,Question

members = Member.query.all()

for member in members:
    print(member.name)