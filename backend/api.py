from flask import Flask,jsonify,request
import json
from flask_cors import CORS
from database.init_database import db_session


#default config
app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False
CORS(app)


@app.route("/")
def start():
  return 0

@app.route("/game",methods=["GET","POST"])
def game():
  return 0

@app.route("/feedback",methods=["GET","POST"])
def feedback():
  from database.models import Feedback
  if(request.method == "GET"):
    feedbacks = Feedback.query().all()
    feedbacks = feedbacks.text
    return jsonify({"feedback":feedbacks})


  if(request.method == "POST"):
    return  0


#app.pyをターミナルから直接呼び出した時だけ、app.run()を実行する
if(__name__ == "__main__"):
  app.run(host="0.0.0.0",port = 5000, debug =True)