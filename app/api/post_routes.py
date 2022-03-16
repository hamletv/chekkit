from flask import Blueprint
from flask_login import login_required
from app.models import db, Post

post_routes = Blueprint('post_routes', __name__)


@post_routes.route('/')
@login_required
def all_posts():
    posts = Post.query.all()
    return { 'posts': [post.to_dict() for post in posts] }


@post_routes.route('/<int:id>')
def view_single_post(id):
    post = Post.query.get(id).first_or_404(f'Post {id} does not exist.')
    return { 'single post': post }


@post_routes.route('/users/<int:id>')
@login_required
def user_posts(id):
    posts = Post.query.filter_by(user_id=id).all()
    return { 'posts': [post.to_dict() for post in posts] }


@post_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_post(id):
    post = Post.query.get(id)


@post_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_post(id):
    post_to_delete = Post.query.get(id)
    db.session.delete(post_to_delete)
    db.session.commit()
    return { 'id': id }
