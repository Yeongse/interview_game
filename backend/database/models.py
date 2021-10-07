from sqlalchemy import Column, Integer, Text, DateTime
from sqlalchemy.sql.schema import ForeignKey
from database.init_database import Base

class Character(Base):
    __tablename__ = "characters"
    id          = Column(Integer,primary_key=True,autoincrement=True)
    image_src   = Column(Text)
    name        = Column(Text,unique=True)
    background  = Column(Text)
    skill       = Column(Text)
    personality = Column(Text)

    def __init__(self,image_src,name,background,skill,personality):
        self.image_src   = image_src
        self.name        = name
        self.background  = background
        self.skill       = skill
        self.personality = personality


class Company(Base):
    __tablename__ = "companies"
    id    = Column(Integer,primary_key=True,autoincrement=True)
    genre = Column(Text)
    name  = Column(Text,unique=True)

    def __init__(self,genre,name):
        self.genre = genre
        self.name  = name


class Question(Base):
    __tablename__ = "questions"
    id                = Column(Integer,primary_key=True,autoincrement=True)
    question_group_id = Column(Integer)
    text     = Column(Text)

    def __init__(self,question_group_id,text):
        self.question_group_id = question_group_id
        self.text = text


class Answer(Base):
    __tablename__ = "answers"
    id          = Column(Integer,primary_key=True,autoincrement=True)
    question_id = Column(Integer,ForeignKey("questions.id"))
    text = Column(Text)

    def __init__(self,question_id,text):
        self.question_id = question_id
        self.text  = text


class Member(Base):
    __tablename__ = "members"
    id                = Column(Integer,primary_key=True,autoincrement=True)
    image_src         = Column(Text)
    company_id        = Column(Integer,ForeignKey("companies.id"))
    question_group_id = Column(Integer)
    HP           = Column(Integer)
    name         = Column(Text)
    position     = Column(Text)
    personality  = Column(Text)

    def __init__(self,image_src,company_id,question_group_id,HP,name,position,personality):
        self.image_src         = image_src
        self.company_id        = company_id
        self.question_group_id = question_group_id
        self.HP           = HP
        self.name         = name
        self.position     = position
        self.personality  = personality


class Feedback(Base):
    __tablename__ = "feedbacks"
    id   = Column(Integer,primary_key=True,autoincrement=True)
    text = Column(Text)

    def __init__(self,text):
        self.text = text
