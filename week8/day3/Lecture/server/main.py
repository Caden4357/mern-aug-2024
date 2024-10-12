from flask import Flask, jsonify, request, redirect
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt

app = Flask(__name__)
cors = CORS(app)
bcrypt = Bcrypt(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:root@localhost/flask-react-2024' # This sets up the connection to a MySQL database. In this example, it connects to a local MySQL database with username root, password root,
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False # Disables unnecessary modification tracking, which can be resource-heavy.

db = SQLAlchemy(app) # This initializes the database connection.


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False) # This defines a column in the database table for the username. It is a string with a maximum length of 80 characters, must be unique, and cannot be null.
    email = db.Column(db.String(120), unique=True, nullable=False) # This defines a column in the database table for the email. It is a string with a maximum length of 120 characters, must be unique, and cannot be null.
    password = db.Column(db.String(400), nullable=False) # This defines a column in the database table for the password. It is a string with a maximum length of 80 characters and cannot be null.


@app.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()
    print(data)
    username = data['username']
    email = data['email']
    password = data['password']

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    new_user = User(username=username, email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'User created!'}) # This returns a JSON response with a message indicating that the user was created.


@app.route('/api/hello')
def hello():
    return jsonify({'message': 'Hello, world!'})














if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # This creates the tables if they don't exist
    app.run(debug=True)