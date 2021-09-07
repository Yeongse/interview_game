from init_database import db_session
from models import Character,Company,Member

char1 = Character("name","background","personality","experience")
comp1 = Company("name")
memb1 = Member(100,"name1","position","personality","company_name")
memb2 = Member(100,"name2","position","personality","company_name")
memb3 = Member(100,"name3","position","personality","company_name")

db_session.add(char1)
db_session.add(comp1)
db_session.add(memb1)
db_session.add(memb2)
db_session.add(memb3)
db_session.commit()