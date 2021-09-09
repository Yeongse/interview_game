from init_database import db_session
from models import Character

char1 = Character(4,"座古田 鴨男","土亜法大学心理学部卒業","真面目だが頭が悪い。株やプログラミングなど様々なことに挑戦するも理解が追いつかず挫折。飲食店のバイトだけ頑張れている。趣味はゲーム。","Wordでレポートが書ける")

db_session.add(char1)
db_session.commit()