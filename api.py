from flask import Flask,jsonify,request
import json
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column,Integer,String,Text
from flask_marshmallow import Marshmallow
from flask_marshmallow.fields import fields
from sqlalchemy.sql.schema import PrimaryKeyConstraint


#default config
app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///interview_game.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config['JSON_AS_ASCII'] = False
CORS(app)


#make database
db = SQLAlchemy(app)


def insert_into_database():
  #yahoo = Company("Yahoo株式会社","../logos/yohoo_logo.jpg","バックエンド","オンライン","1300円/h","8/30〜9/5","6/18 12:00","https://about.yahoo.co.jp/hr/internship/")
  #line  = Company("株式会社LINE" ,"../logos/line_logo.jpg" ,"バックエンド","オンライン","1500円/h","9/8～9/17","6/18 12:00","https://linecorp.com/ja/career/newgrads/internship/")
  yahoo = Company("Yahoo株式会社","../logos/yohoo_logo.jpg","バックエンド","JavaまたはPythonの経験","オンライン","1300円/h","8/30〜9/5","6/18 12:00")

  db.session.add(yahoo)
  #db.session.add(line)
  
  db.session.commit()

#set marshmallow
ma = Marshmallow()
class CompanySchema(ma.Schema):
    class Meta:
        model = Company
    
    name         = fields.String()
    logo         = fields.String()
    courses      = fields.String()
    requirement  = fields.String()
    place        = fields.String()
    salary       = fields.String()
    term         = fields.String()
    deadline     = fields.String()
    #homepage     = fields.String()


@app.route("/recipes",methods=["GET","POST"])
def recipes():
  if(request.method == "POST"):
    return 0
  else:
    return 1
  db.create_all()
  insert_into_database()
  companies = Company.query.all()
  print(type(companies[0]))
  return jsonify({"Companies":CompanySchema().dump(companies[0])})


#app.pyをターミナルから直接呼び出した時だけ、app.run()を実行する
if(__name__ == "__main__"):
  app.run(host="0.0.0.0",port = 5000, debug =True)