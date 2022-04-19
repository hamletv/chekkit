from .db import db
from datetime import datetime

users_comms = db.Table(
    'user_comms',
    db.Column('user_id', db.Integer, db.ForeignKey('users.id')),
    db.Column('comm_id', db.Integer, db.ForeignKey('communities.id'))
)

class Community(db.Model):
    __tablename__ = 'communities'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    comm_name = db.Column(db.Text, nullable=False)
    comm_img = db.Column(db.Text, nullable=False)
    about = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now(), nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.now(), onupdate=datetime.now(), nullable=False)

    user = db.relationship('User', back_populates='communities', cascade='all, delete')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'comm_name': self.comm_name,
            'about': self.about,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
