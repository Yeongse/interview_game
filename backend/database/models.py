from sqlalchemy import Column, Integer, Text, DateTime
from sqlalchemy.sql.schema import ForeignKey
from database.init_database import Base

class Character(Base):
    __tablename__ = "characters"
    id          = Column(Integer,primary_key=True,autoincrement=True)
    props       = Column(Integer)
    name        = Column(Text,unique=True)
    background  = Column(Text)
    personality = Column(Text)
    experience  = Column(Text)

    def __init__(self,props,name,background,personality,experience):
        self.props       = props
        self.name        = name
        self.background  = background
        self.personality = personality
        self.experience  = experience


class Company(Base):
    __tablename__ = "companies"
    id    = Column(Integer,primary_key=True,autoincrement=True)
    genre = Column(Text)
    name  = Column(Text,unique=True)

    def __init__(self,genre,name):
        self.genre = genre
        self.name  = name


class QuestionGroup(Base):
    __tablename__ = "question_groups"
    id = Column(Integer,primary_key=True,autoincrement=True)


class Question(Base):
    __tablename__ = "questions"
    id                = Column(Integer,primary_key=True,autoincrement=True)
    question_group_id = Column(Integer,ForeignKey("question_groups.id"))
    text  = Column(Text)

    def __init__(self,question_group_id,text):
        self.question_group_id = question_group_id
        self.text = text


class Answer(Base):
    __tablename__ = "answers"
    id          = Column(Integer,primary_key=True,autoincrement=True)
    question_id = Column(Integer,ForeignKey("questions.id"))
    props = Column(Integer)
    text  = Column(Text)

    def __init__(self,question_id,props,text):
        self.question_id = question_id
        self.props = props
        self.text  = text


class Member(Base):
    __tablename__ = "members"
    id                = Column(Integer,primary_key=True,autoincrement=True)
    company_id        = Column(Integer,ForeignKey("companies.id"))
    question_group_id = Column(Integer,ForeignKey("question_groups.id"))
    HP           = Column(Integer)
    name         = Column(Text)
    position     = Column(Text)
    personality  = Column(Text)

    def __init__(self,company_id,question_group_id,HP,name,position,personality):
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
