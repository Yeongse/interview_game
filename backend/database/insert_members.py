from database.init_database import db_session
from database.models import Member

def insert_members():
    member1 = Member("./images/hr.png"     ,1,1,100,"屋久 多太樹","人事","人事になったものの、他人の評価方法が全くわかっていない。")
    member2 = Member("./images/staff.png"  ,1,2,150,"左掘 幕裏"  ,"現場","いかにサボってお金をもらうかを常に考えている。")
    member3 = Member("./images/officer.png",1,3,200,"王 涼"     ,"役員","会社の金をパクっているので、経営にはあまり興味がない。")

    db_session.add(member1)
    db_session.add(member2)
    db_session.add(member3)
    db_session.commit()