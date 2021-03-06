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
    first_name = StringField('First Name', validators=[DataRequired(message='Please enter your first name.'), Length(min=2, max=60, message='Name must be between 2 and 60 characters.')])
    last_name = StringField('Last Name', validators=[DataRequired(message='Please enter your last name.'), Length(min=2, max=60, message='Last name must be between 2 and 60 characters.')])
    username = StringField(
        'Username', validators=[DataRequired(message='Please enter a username.'), username_exists, Length(min=4, max=25, message='Username must be between 4 and 25 characters.')])
    email = StringField('Email', validators=[DataRequired(message='Please enter your email.'), user_exists, Email(message='Please provide a valid email'), Length(min=5, max=50, message='Email must be > 5 and < 50 chars.')])
    password = StringField('Password', validators=[DataRequired(message='Enter password with at least 6 characters.'), Length(min=6, max=25, message='Password must be between 6 and 25 characters.'), EqualTo('confirm_password', message='Passwords must match')])
    confirm_password = StringField('Confirm Password', validators=[DataRequired(message='Enter previously typed password')])
