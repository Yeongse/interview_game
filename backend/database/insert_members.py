from init_database import db_session
from models import Member

memb1 = Member(1,1,100,"屋久 多太樹","人事","人事になったものの、他人の評価方法が全くわかっていない。")
memb2 = Member(1,2,150,"左掘 幕裏"  ,"現場","いかにサボってお金をもらうかを常に考えている。")
memb3 = Member(1,3,200,"王 涼"     ,"役員","会社の金をパクっているので、経営にはあまり興味がない。")

db_session.add(memb1)
db_session.add(memb2)
db_session.add(memb3)
db_session.commit()