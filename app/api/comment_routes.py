from flask import Blueprint, request
from flask_login import login_required
from app.forms.comment_form import CommentForm
from app.models import db, Comment
import json

comment_routes = Blueprint('comment_routes', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@comment_routes.route('/')
def all_comments():
    comments = Comment.query.all()
    return { 'comments': [comment.to_dict() for comment in comments] }


@comment_routes.route('/<int:id>')
def get_comment(id):
    comment = Comment.query.get(id)
    return { 'comment': comment }


@comment_routes.route('/', methods=['POST'])
@login_required
def create_comment():
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_comment = Comment(
            user_id=form.data['user_id'],
            post_id=form.data['post_id'],
            comment=form.data['comment']
            )
        db.session.add(new_comment)
        db.session.commit()
        return new_comment.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@comment_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_comment(id):
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        comment_to_edit = Comment.query.get_or_404(id)
        comment_to_edit.comment = form.data['comment']

        db.session.commit()
        return comment_to_edit.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@comment_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_comment(id):
    comment_to_delete = Comment.query.get(id)
    db.session.delete(comment_to_delete)
    db.session.commit()
    return { 'id': id }
