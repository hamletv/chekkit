from .db import db

class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    votes = db.Column(db.Integer)
    img_url = db.Column(db.Text)
    title = db.Column(db.Text, nullable=False)
    description = db.Column(db.Text)

    comments = db.relationship('Comment', back_populates='posts', cascade='all, delete')
    user = db.relationship('User', back_populates='posts')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'votes': self.votes,
            'img_url': self.img_url,
            'title': self.title,
            'description': self.description,
            'profile_img': self.user.profile_img,
            'comments': [comment.to_dict() for comment in self.comments]
        }
