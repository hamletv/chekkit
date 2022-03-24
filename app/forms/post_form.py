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
    # votes = IntegerField('votes')
    img_url = TextAreaField('img_url', validators=[DataRequired(message='Enter a valid image url'), URL(require_tld=True, message='The url provided is not valid.'), valid_image_format])
    title = TextAreaField('title', validators=[DataRequired(message='Please enter a descriptive title.'), Length(min=5, max=300)])
    description = TextAreaField('description')
    submit = SubmitField('Post')


# class ImgVidForm(FlaskForm):
#     user_id = IntegerField('user_id')
#     title = TextAreaField('title', validators=[DataRequired(message='Please enter a descriptive title.'), Length(min=5, max=300)])
#     img_url = TextAreaField('img_url', validators=[DataRequired(message='Enter a valid image url'), URL(require_tld=True, message='The url provided is not valid.')])
#     submit = SubmitField('Post')
