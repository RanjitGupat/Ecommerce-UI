from flask import Flask, render_template
from chat import get_response

app = Flask(__name__)

@app.route('/')

def index_get():
    return render_template('base.html')

@app.post('/predict')
def pridict():
    text = request.get_josn().get('message')
    # TODO: check if text is valid
    response = get_response(text)
    message = {"answer": response}
    return jsonify(message)

if __name__ == '__main__':
    app.run(debug=True)
    