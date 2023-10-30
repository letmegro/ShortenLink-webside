from flask import Flask, jsonify, request
from flask_cors import CORS
import pyshorteners

type_tiny = pyshorteners.Shortener()

app = Flask(__name__)
CORS(app)

def shortenLink(link):
    short_url = type_tiny.tinyurl.short(link)
    return short_url

@app.route("/api/shorten", methods=['POST'])
def return_home():
    data = request.json
    short_url = shortenLink(data['Link']);
    return jsonify(short_url)

@app.route("/api/about", methods=['GET'])
def about_page():
    return '<a href="/">Go Back</a><br><h2>This is currently a place holder page as this project is being expanded</h2>'