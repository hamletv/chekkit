from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, EqualTo, Length
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')


class SignUpForm(FlaskForm):
    username = StringField(
        'username', validators=[DataRequired(), username_exists, Length(min=2, max=25)])
    email = StringField('email', validators=[DataRequired(), user_exists, Email(message='Please provide a valid email')])
    password = StringField('password', validators=[DataRequired(), Length(min=6, max=25)])
    confirm_password = StringField('confirm_password', validators=[DataRequired(), EqualTo(password, message='Passwords must match.')])
