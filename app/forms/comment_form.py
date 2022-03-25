from flask_wtf import FlaskForm
from wtforms.validators import DataRequired, Length
from wtforms import IntegerField, TextAreaField, SubmitField


class CommentForm(FlaskForm):
    user_id = IntegerField('user_id')
    post_id = IntegerField('post_id')
    # likes = IntegerField('likes')
    comment = TextAreaField('comment', validators=[DataRequired(message='Add your comment.'), Length(min=2, max=2200, message='Your comment must contain at least 2 characters.')])
    submit = SubmitField('Comment')
