from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import db, Post
from app.forms.post_form import PostForm

post_routes = Blueprint('post_routes', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@post_routes.route('/')
def all_posts():
    posts = Post.query.all()
    return { 'posts': [post.to_dict() for post in posts] }


@post_routes.route('/<int:id>')
def view_single_post(id):
    post = Post.query.get(id).first_or_404(f'Post {id} does not exist.')
    return { 'single post': post }


@post_routes.route('/new', methods=['POST'])
@login_required
def add_post():
    form = PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_post = Post(
            user_id=form.data['user_id'],
            img_url=form.data['img_url'],
            title=form.data['title'],
            description=form.data['description']
        )
        db.session.add(new_post)
        db.session.commit()
        return new_post.to_dict()


@post_routes.route('/users/<int:id>')
@login_required
def user_posts(id):
    posts = Post.query.filter_by(user_id=id).all()
    return { 'posts': [post.to_dict() for post in posts] }


@post_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_post(id):
    form = PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        post_to_edit = Post.query.get_or_404(id)
        post_to_edit.img_url = form.data['img_url']
        post_to_edit.title = form.data['title']
        post_to_edit.description = form.data['description']

        db.session.commit()
        return post_to_edit.to_dict()
    else:
        return {'error': 'Missing information'}


@post_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_post(id):
    post_to_delete = Post.query.get(id)
    db.session.delete(post_to_delete)
    db.session.commit()
    return { 'id': id }
