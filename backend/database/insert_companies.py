from init_database import db_session
from models import Company

comp1 = Company("食品系中小企業","央明家次株式会社")

db_session.add(comp1)
db_session.commit()