from sqlalchemy import Column, Integer, String, Text, DateTime
from init_database import Base
from datetime import datetime


class Character(Base):
    __tablename__ = "characters"
    id          = Column(Integer,primary_key=True,autoincrement=True)
    name        = Column(Text,unique=True)
    background  = Column(Text)
    personality = Column(Text)
    experience  = Column(Text)

    def __init__(self,name,background,personality,experience):
        self.name        = name
        self.background  = background
        self.personality = personality
        self.experience  = experience

class Company(Base):
    __tablename__ = "companies"
    id   = Column(Integer,primary_key=True,autoincrement=True)
    name = Column(Text,unique=True)

    def __init__(self,name):
        self.name = name

class Member(Base):
    __tablename__ = "members"
    id           = Column(Integer,primary_key=True,autoincrement=True)
    HP           = Column(Integer)
    name         = Column(Text)
    position     = Column(Text)
    personality  = Column(Text)
    company_name = Column(Text)

    def __init__(self,HP,name,position,personality,company_name):
        self.HP           = HP
        self.name         = name
        self.position     = position
        self.personality  = personality
        self.company_name = company_name