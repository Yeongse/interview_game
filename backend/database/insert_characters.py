from database.init_database import db_session
from database.models import Character

def insert_characters():
    character1 = Character("./images/student.png","座古田 鴨男","土亜法大学心理学部卒業","Wordでレポートが書ける。Excelでsumを使える。","真面目だが頭が悪い。ジムやプログラミングなどに挑戦するもすぐに飽きて挫折。飲食店のバイトだけ頑張れている。趣味はゲーム。")

    db_session.add(character1)
    db_session.commit()