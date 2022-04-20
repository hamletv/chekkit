from app.models import db, User, Community

def seed_users_comms():
    user1 = User.query.get(1)
    comm1 = Community.query.get(1)
    user1.communities.append(comm1)

    db.session.commit()


def undo_users_comms():
    db.session.execute('TRUNCATE users_comm RESTART IDENTITY CASCADE;')
    db.session.commit()
