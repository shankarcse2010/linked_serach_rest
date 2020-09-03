from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def helloWorld():
   return {'hello': 'world'}

if __name__ == '__main__':
    app.run(debug=True, port=8080)