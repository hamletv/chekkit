from .db import db
from datetime import datetime
from app.models import posts_comms
from app.models import users_comms


class Community(db.Model):
    __tablename__ = 'communities'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    comm_name = db.Column(db.Text, nullable=False)
    comm_img = db.Column(db.Text, nullable=False)
    about = db.Column(db.Text, nullable=False)
    users = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, default=datetime.now(), nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.now(), onupdate=datetime.now(), nullable=False)

    user = db.relationship('User', back_populates='community', cascade='all, delete')
    users = db.relationship('User', secondary=users_comms, back_populates='communities')
    posts = db.relationship('Post', secondary=posts_comms, back_populates='communities')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'comm_name': self.comm_name,
            'comm_img': self.comm_img,
            'about': self.about,
            'posts': [{'post_id': post.id} for post in self.posts],
            'users': [{'user_id': user.id} for user in self.users],
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
