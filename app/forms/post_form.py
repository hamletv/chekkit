from flask_wtf import FlaskForm
from wtforms import SubmitField, TextAreaField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError, Length, EqualTo



class PostForm(FlaskForm):
    user_id = IntegerField('user_id')
    # votes = IntegerField('votes')
    img_url = TextAreaField('img_url')
    title = TextAreaField('title', validators=[DataRequired(), Length(min=5, max=300)])
    description = TextAreaField('description')
    submit = SubmitField('Post')
