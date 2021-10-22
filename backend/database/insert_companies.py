from database.init_database import db_session
from database.models import Company

def insert_companies():
    company1 = Company("食品系中小企業","応垢痔株式会社")

    db_session.add(company1)
    db_session.commit()