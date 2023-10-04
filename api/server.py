from flask import Flask, jsonify, request
from flask_cors import CORS
import pyshorteners

type_tiny = pyshorteners.Shortener()

app = Flask(__name__)
CORS(app)

def shortenLink(link):
    short_url = type_tiny.tinyurl.short(link)
    return short_url

@app.route("/api/shorten-link", methods=['POST'])
def return_home():
    data = request.json
    short_url = shortenLink(data['Link']);
    return jsonify(short_url)

if __name__ == "__main__":
    app.run(port=8080)