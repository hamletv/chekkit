from app.models import db, Post, Community

def seed_posts_comms():
    post1 = Post.query.get(1)
    post2 = Post.query.get(2)
    post3 = Post.query.get(3)
    post4 = Post.query.get(4)
    post5 = Post.query.get(5)
    post6 = Post.query.get(6)
    post7 = Post.query.get(7)

    comm1 = Community.query.get(1)
    comm2 = Community.query.get(2)
    comm3 = Community.query.get(3)
    comm4 = Community.query.get(4)
    comm5 = Community.query.get(5)

    post1.communities.append(comm1)
    post2.communities.append(comm2)
    post3.communities.append(comm3)
    post4.communities.append(comm4)
    post5.communities.append(comm5)
    post6.communities.append(comm1)
    post7.communities.append(comm2)

    db.session.commit()

def undo_posts_comms():
    db.session.execute('TRUNCATE posts_comms RESTART IDENTITY CASCADE;')
    db.session.commit()
