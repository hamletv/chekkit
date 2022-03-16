from flask import Blueprint
from flask_login import login_required
from app.models import db, Comment

comment_routes = Blueprint('comment_routes', __name__)


@comment_routes.route('/')
@login_required
def all_comments():
    comments = Comment.query.all()
    return { 'comments': [comment.to_dict() for comment in comments] }


@comment_routes.route('/')
@login_required
def create_comment():
