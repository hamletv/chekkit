from flask_wtf import FlaskForm
from wtforms import SubmitField, TextAreaField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError, Length, EqualTo, URL



class PostForm(FlaskForm):
    user_id = IntegerField('user_id')
    # votes = IntegerField('votes')
    img_url = TextAreaField('img_url', validators=[DataRequired(message='Enter a valid image url'), URL(require_tld=True, message='The url provided is not valid.')])
    title = TextAreaField('title', validators=[DataRequired(message='Please enter a descriptive title.'), Length(min=5, max=300)])
    description = TextAreaField('description')
    submit = SubmitField('Post')


# class ImgVidForm(FlaskForm):
#     user_id = IntegerField('user_id')
#     title = TextAreaField('title', validators=[DataRequired(message='Please enter a descriptive title.'), Length(min=5, max=300)])
#     img_url = TextAreaField('img_url', validators=[DataRequired(message='Enter a valid image url'), URL(require_tld=True, message='The url provided is not valid.')])
#     submit = SubmitField('Post')
