from flask import Flask,jsonify,request
import json
from flask_cors import CORS
from database.init_database import db_session

#default config
app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False
CORS(app)


@app.route("/",methods=["GET"])
def game():
  return 0

@app.route("/feedback",methods=["GET","POST"])
def feedback():
  return 0


#app.pyをターミナルから直接呼び出した時だけ、app.run()を実行する
if(__name__ == "__main__"):
  app.run(host="0.0.0.0",port = 5000, debug =True)