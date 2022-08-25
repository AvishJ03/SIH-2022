from unittest import result
from flask import Flask, jsonify, request
import func

app = Flask(__name__)


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


@app.route("/rec", methods=['POST'])
def rec():
    title = request.headers.get("title")
    skills = request.headers.get("skills")
    location = request.headers.get("location")
    jobType = request.headers.get("jobType")
    experience = int(request.headers.get("experience"))
    user = f"{title} {skills}"
    ids = func.recommend(user, jobType, location, experience)
    result = {
        "ids": ids,
    }
    return jsonify(result)


if __name__ == "__main__":
    app.run(port=5001,debug=True)
