from flask import Blueprint, request
from flask_login import login_required
from app.models import db, Community, User
from app.forms.community_form import CommunityForm


community_routes = Blueprint('community_routes', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@community_routes.route('/')
def all_communities():
    communities = Community.query.all()
    return { 'communities': [community.to_dict() for community in communities] }


@community_routes.route('/new-subchekkit', methods=['POST'])
@login_required
def add_community():
    form = CommunityForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_subchekkit = Community(
            user_id=form.data['user_id'],
            comm_name=form.data['comm_name'],
            comm_img=form.data['comm_img'],
            about=form.data['about'],
        )
        db.session.add(new_subchekkit)
        db.session.commit()
        user = User.query.get(form.data['user_id'])
        user.communities.append(new_subchekkit)
        db.session.commit()

        return user.to_dict()
        return new_subchekkit.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@community_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_community(id):
    form = CommunityForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        comm_to_edit = Community.query.get_or_404(id)
        comm_to_edit.comm_img = form.data['img_url']
        comm_to_edit.comm_name = form.data['comm_name']
        comm_to_edit.about = form.data['about']


        db.session.commit()
        return comm_to_edit.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@community_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_community(id):
    comm_to_delete = Community.query.get(id)
    db.session.delete(comm_to_delete)
    db.session.commit()
    return { 'id': id }
