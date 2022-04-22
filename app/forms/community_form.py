from flask_wtf import FlaskForm
from wtforms import SubmitField, TextAreaField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError, Length, EqualTo, URL


def valid_image_format(form, field):
    # Check file format
    img_url = field.data
    if not img_url.endswith(('.png', '.jpg', '.jpeg', '.gif')):
        raise ValidationError('File url must end with .png, .jpg, .jpeg, .gif')


class CommunityForm(FlaskForm):
    user_id = IntegerField('user_id')
    comm_name = TextAreaField('community name', validators=[DataRequired(message='Enter community name, 25 chars max'), Length(min=5, max=25, message='Community name must be between 5 and 25 characters.')])
    comm_img = TextAreaField('comm_img', validators=[DataRequired(message='Enter a valid image url'), URL(require_tld=True, message='The url provided is not valid, must contain http(s).'), valid_image_format])
    about = TextAreaField('about', validators=[DataRequired(message='What is your community about?'), Length(min=10, max=300, message='Add a d brief description of your community')])
    submit = SubmitField('Subchekkit')
