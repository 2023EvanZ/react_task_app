from flask import Flask, jsonify, request, json
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///example.db"
db = SQLAlchemy(app)

class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)

    def __str__(self):
        return f'{self.id} {self.content}'
    
#with app.app_context():
#    db.create_all()
def todo_serializer(todo):
    return {
        'id' : todo.id,
        'content': todo.content
    }

@app.route('/api', methods=['GET'])
def index():
    return jsonify([*map(todo_serializer, Todo.query.all())])

@app.route('/api/create', methods=['POST'])
def create():
    print(request.data)
    request_data = json.loads(request.data)
    todo = Todo(content=request_data['content'])

    db.session.add(todo)
    db.session.commit()

    return {'201': 'todo created successfully'}

@app.route('/api/<int:id>')
def show(id):
    return jsonify([*map(todo_serializer, Todo.query.filter_by(id=id))])
    
@app.route('/api/<int:id>', methods=['POST'])
def delete(id):
    print("ID: ", id)
    request_data = json.loads(request.data)
    print("DELETE_ID: ", request_data)
    Todo.query.filter_by(id=request_data['id']).delete()
    db.session.commit()

    return {'204': 'Deleted successfully'}

@app.route('/api/edit/<int:id>', methods=['POST'])
def edit(id):
    request_data = json.loads(request.data)
    todo_edit = Todo.query.get(id)
    todo_edit.content = request_data['content']

    db.session.add(todo_edit)
    db.session.commit()

    return {'205': 'Edited successfully'}


if __name__ == "__main__":
    app.run(debug=True)