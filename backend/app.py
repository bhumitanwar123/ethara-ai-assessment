from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def predict_crime(data):
    if data["severity"] > 7:
        return "Violent Crime"
    else:
        return "Non-Violent Crime"

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json
        severity = int(data.get("severity", 0))
        result = predict_crime({"severity": severity})
        return jsonify({"prediction": result})
    except:
        return jsonify({"error": "Invalid input"}), 400

if __name__ == "__main__":
    app.run()
