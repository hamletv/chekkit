from flask_wtf import FlaskForm
from wtforms import SubmitField, TextAreaField, IntegerField
from wtforms.validators import DataRequired


class PostForm(FlaskForm):
    user_id = IntegerField('user_id')
    votes = IntegerField('votes')
    img_url = TextAreaField('img_url')
    title = TextAreaField('title', [DataRequired()])
    description = TextAreaField('description')
    submit = SubmitField('Post')
