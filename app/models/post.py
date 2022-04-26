from .db import db
from datetime import datetime

posts_comms = db.Table(
    'posts_comms',
    db.Column('comm_id', db.Integer, db.ForeignKey('communities.id'), primary_key=True),
    db.Column('post.id', db.Integer, db.ForeignKey('posts.id'), primary_key=True)
    )

class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    img_url = db.Column(db.Text)
    title = db.Column(db.Text, nullable=False)
    description = db.Column(db.Text)
    community_id = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now(), nullable=False)
    updated_at = db.Column(db.DateTime, default=datetime.now(), onupdate=datetime.now(), nullable=False)

    user = db.relationship('User', back_populates='posts')
    comments = db.relationship('Comment', back_populates='posts', cascade='all, delete')
    communities = db.relationship('Community', secondary=posts_comms, back_populates='posts')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'username': self.user.username,
            'img_url': self.img_url,
            'title': self.title,
            'description': self.description,
            'profile_img': self.user.profile_img,
            'community_id': self.community_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
