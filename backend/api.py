from flask import Flask,jsonify,request
import json
from flask_cors import CORS
from sqlalchemy.sql.selectable import AnnotatedFromClause
from database.models import Answer,Character,Company,Feedback,Member,Question
from database.init_database import db_session


#default config
app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False
CORS(app)


def fetch_json_data():
  fetched_characters = Character.query.all()
  fetched_companies  = Company.query.all()
  fetched_members    = Member.query.all()
  fetched_questions  = Question.query.all()
  fetched_answers    = Answer.query.all()

  character_image_srcs    = []
  character_names         = []
  character_backgrounds   = []
  character_skills        = []
  character_personalities = []

  company_genres  = []
  company_names   = []

  member_image_srcs         = []
  member_company_ids        = []
  member_question_group_ids = []
  member_HPs                = []
  member_names              = []
  member_positions          = []
  member_personalities      = []

  question_ids                = []
  question_question_group_ids = []
  question_texts              = []
  
  answer_ids          = []
  answer_question_ids = []
  answer_texts        = []

  for character in fetched_characters:
    character_image_srcs.append(character.image_src)
    character_names.append(character.name)
    character_backgrounds.append(character.background)
    character_skills.append(character.skill)
    character_personalities.append(character.personality)

  for company in fetched_companies:
    company_genres.append(company.genre)
    company_names.append(company.name)
  
  for member in fetched_members:
    member_image_srcs.append(member.image_src)
    member_company_ids.append(member.company_id)
    member_question_group_ids.append(member.question_group_id)
    member_HPs.append(member.HP)
    member_names.append(member.name)
    member_positions.append(member.position)
    member_personalities.append(member.personality)
  
  for question in fetched_questions:
    question_ids.append(question.id)
    question_question_group_ids.append(question.question_group_id)
    question_texts.append(question.text)

  for answer in fetched_answers:
    answer_ids.append(answer.id)
    answer_question_ids.append(answer.question_id)
    answer_texts.append(answer.text)

  character_json = {
    "image_src":character_image_srcs,
    "name":character_names,
    "background":character_backgrounds,
    "skill":character_skills,
    "personality":character_personalities
  }

  company_json = {
    "genre":company_genres,
    "name":company_names
  }

  member_json = {
    "image_src":member_image_srcs,
    "company_id":member_company_ids,
    "question_group":member_question_group_ids,
    "HP":member_HPs,
    "name":member_names,
    "position":member_positions,
    "personality":member_personalities
  }

  question_json = {
    "id":question_ids,
    "question_group_id":question_question_group_ids,
    "text":question_texts
  }

  answer_json = {
    "id":answer_ids,
    "question_id":answer_question_ids,
    "text":answer_texts
  }


  return character_json, company_json, member_json, question_json, answer_json


@app.route("/")
def start():
  return 0

#一応ここもできた
@app.route("/game",methods=["GET"])
def return_game_params():
  character_json, company_json, member_json, question_json, answer_json = fetch_json_data()

  return jsonify({"characters":character_json, 
                  "companies":company_json, 
                  "members":member_json, 
                  "questions":question_json, 
                  "answers":answer_json})



#ここについては完成
@app.route("/feedback",methods=["GET","POST"])
def show_and_take_feedback():
  if(request.method == "POST"):
    sent_data = request.json["comments"]
    content   = Feedback(sent_data)
    db_session.add(content)
    db_session.commit()
  
  feedbacks = []
  fetched_data = Feedback.query.all()
  for feedback in fetched_data:
    feedbacks.append(feedback.text)
  return jsonify({"comments":feedbacks})


#app.pyをターミナルから直接呼び出した時だけ、app.run()を実行する
if(__name__ == "__main__"):
  app.run(host="0.0.0.0",port = 5000, debug =True)