from app.models import db, User, Community

def seed_users_comms():
    user1 = User.query.get(1)
    user2 = User.query.get(2)
    user3 = User.query.get(3)
    user4 = User.query.get(4)
    user5 = User.query.get(5)
    user6 = User.query.get(6)

    comm1 = Community.query.get(1)
    comm2 = Community.query.get(2)
    comm3 = Community.query.get(3)
    comm4 = Community.query.get(4)
    comm5 = Community.query.get(5)

    user1.communities.append(comm1)
    user1.communities.append(comm2)
    user2.communities.append(comm1)
    user2.communities.append(comm3)
    user3.communities.append(comm1)
    user3.communities.append(comm4)
    user4.communities.append(comm1)
    user5.communities.append(comm5)
    user6.communities.append(comm1)

    db.session.commit()


def undo_users_comms():
    db.session.execute('TRUNCATE users_comms RESTART IDENTITY CASCADE;')
    db.session.commit()
