from typing import Text
from flask_wtf import FlaskForm
from wtforms import SubmitField, TextAreaField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError, Length, EqualTo, URL


def valid_image_format(form, field):
    # Check file format
    img_url = field.data
    if not img_url.endswith(('.png', '.jpg', '.jpeg', '.gif')):
        raise ValidationError('File url must end with .png, .jpg, .jpeg, .gif')


class PostForm(FlaskForm):
    user_id = IntegerField('user_id')
    img_url = TextAreaField('img_url', validators=[DataRequired(message='Enter a valid image url'), URL(require_tld=True, message='The url provided is not valid, must contain http(s).'), valid_image_format])
    title = TextAreaField('title', validators=[DataRequired(message='Please enter a descriptive title, 5 char or more.'), Length(min=5, max=300, message='Title must be between 5 and 300 characters.')])
    community_id = IntegerField('community_id')
    description = TextAreaField('description', validators=[Length(min=0, max=10000, message='Description must be under 1000 characters.')])
    submit = SubmitField('Post')


# class ImgVidForm(FlaskForm):
#     user_id = IntegerField('user_id')
#     title = TextAreaField('title', validators=[DataRequired(message='Please enter a descriptive title.'), Length(min=5, max=300)])
#     img_url = TextAreaField('img_url', validators=[DataRequired(message='Enter a valid image url'), URL(require_tld=True, message='The url provided is not valid.')])
#     submit = SubmitField('Post')
