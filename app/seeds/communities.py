from app.models import db, Community


def seed_communities():
    c1 = Community(
        user_id=1,
        comm_name='funnyStuff',
        comm_img='https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnVubnl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        about='This is the funnyStuff subchekkit.')

    c2 = Community(
        user_id=1,
        comm_name='nature_channel',
        comm_img='https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        about='This is the nature channel subchekkit.')

    c3 = Community(
        user_id=2,
        comm_name='forTheLoveOfFOOD',
        comm_img='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
        about='This is the forTheLoveOfFOOD subchekkit.')

    c4 = Community(
        user_id=2,
        comm_name='brooklynNYC',
        comm_img='https://images.unsplash.com/photo-1573261658953-8b29e144d1af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnJvb2tseW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        about='This is the brooklynNYC subchekkit.')

    c5 = Community(
        user_id=3,
        comm_name='niceWheels',
        comm_img='https://images.unsplash.com/photo-1500583094682-5dfa5640a99d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2hlZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        about='This is the niceWheels subchekkit.')

    db.session.add_all([c1, c2, c3, c4, c5])
    db.session.commit()


def undo_communities():
    db.session.execute('TRUNCATE communities RESTART IDENTITY CASCADE;')
    db.session.commit()
