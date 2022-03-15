from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', first_name='Emo', last_name='Smith', profile_img='https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60', about='I don\'t really like to talk about myself... Leave me alone, I\'m not on social media to actually be social.', password='password')
    marnie = User(
        username='marnie', email='marnie@aa.io', first_name='Marnie', last_name='Marvel', profile_img='https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        about='Hi I\'m Marnie. My friends call me Marnie, you may call me Ms Marvel. Don\'t contact me, I\'ll contact you.', password='password')
    bobbie = User(
        username='bobbie_cash', email='bobbiec@aa.io', first_name='Robert', last_name='Dinero', profile_img='https://images.unsplash.com/photo-1615567964485-0ee76b5b3410?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ5fHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60', about='Hey wassssup, ya\'ll, bobbie ca$h money here. Financial advisor to people that know people that robbed some people.', password='password')
    hamlet = User(
        username='hv', email='hv@aa.io', first_name='Hamlet', last_name='V', about='Hey, I\'m Hamlet. Yes that is really my name. No I have not read all of Shakespeare\'s works. I am looking to finish my capstone project at aA and hopefully start working as full stack developer ASAP.', password='password')
    john_doe = User(
        username='jd', email='jd@aa.io', first_name='John', last_name='Doe', profile_img='https://images.unsplash.com/photo-1603383928972-2116518cd3f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQxfHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60', about='I do exist.', password='password')
    jane_doe = User(
        username='jd1', email='jd1@aa.io', first_name='Jane', last_name='Doe', profile_img='https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60', about='I exist too. No relation to John but I do need to have some words with that guy. Always grabbing the "jd" usernames and emails. It\'s so frustrating.', password='password')

    db.session.add_all([demo, marnie, bobbie, hamlet, john_doe, jane_doe])
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
