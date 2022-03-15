from app.models import db, Comment


def seed_comments():
    comm1 = Comment(
        user_id=7, post_id=1, likes=12, comment='poor grandma indeed'
    )
    comm2 = Comment(
        user_id=6, post_id=2, likes=1, comment='that guy should be in jail!'
    )
    comm3 = Comment(
        user_id=5, post_id=3, likes=12, comment='hahahaha rofl'
    )
    comm4 = Comment(
        user_id=4, post_id=4, likes=102, comment='you must be out of your mind! but it is beautiful there'
    )
    comm5 = Comment(
        user_id=3, post_id=5, likes=312, comment='i love you hellmo and yeah, seeder files suck!'
    )
    comm6 = Comment(
        user_id=2, post_id=6, likes=121, comment='looks so peaceful'
    )
    comm7 = Comment(
        user_id=1, post_id=7, likes=2, comment='get in ma belly!!!'
    )

    db.session.add([comm1, comm2, comm3, comm4, comm5, comm6, comm7])
    db.session.commit()


def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
