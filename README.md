# Chekkit

Chekkit is a reddit-like clone for uploading, viewing, sharing and commenting of posts. Users can share photos, articles, blurbs, etc. Registered users can vote (up/down) on them, comment on them and become part of a Chekkit community.

## Index
- Live site: [Chekkit](https://chekkit-app.herokuapp.com)

## Technologies Used
 - Python
 - Flask
 - SQLAlchemy
 - React/JS
 - Redux
 - Node
 - Docker

## Getting Started
1. Clone this repo: git@github.com/hamletv/chekkit
2. cd into the /app directory and install dependencies: pipenv install
3. cd into the /react-app directory and install dependencies: npm install
4. create .env file based on the .env.example file given
5. Create user in psql based on .env DATABASE_URL app_name:
 - `psql -c "CREATE USER <username> PASSWORD '<password>' CREATEDB"`
6. Create a database in psql based on your .env DATABASE_URL app_db_name
7. Start shell, migrate database, seed database and run flask app
 - `pipenv shell`
 - `flask db upgrade`
 - `flask seed all`
 - `flask run`
8. Open another terminal and cd into /react-app and run the React app:
 - `npm start`

## Features

## Users
* A new user can sign up for an account.
* An existing user can log in.
* A demo user can try out the site without an account.

## Posts (CRUD)
* Registered users can create/add, view, update and delete posts.
* Unregistered users can scroll through the available posts only.

## Comments (CRUD)
* Registered users can create, view, update and delete comments on posts.

## Communities (CRUD)
* Registered users can create, view, update and delete communities that include posts with a specific, niche interest.

## Up/Down Votes (CRU)
* Registered users can add, view, update votes for posts and comments.
