from flask.cli import AppGroup
from .users import seed_users, undo_users
from .posts import seed_posts, undo_posts
from .comments import seed_comments, undo_comments
from .communities import seed_communities, undo_communities
from .users_comms import seed_users_comms, undo_users_comms
from .posts_comms import seed_posts_comms, undo_posts_comms

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


@seed_commands.command('all')
def seed():
    seed_users()
    seed_posts()
    seed_comments()
    seed_communities()
    seed_users_comms()
    seed_posts_comms()


@seed_commands.command('undo')
def undo():
    undo_users()
    undo_posts()
    undo_comments()
    undo_communities()
    undo_users_comms()
    undo_posts_comms()
