from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

history = []

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/calculate", methods=["POST"])
def calculate():
    data = request.json
    expression = data.get("expression")

    try:
        result = eval(expression)
        entry = f"{expression} = {result}"
        history.append(entry)

        return jsonify({
            "result": result,
            "history": history
        })

    except:
        return jsonify({"error": "Invalid expression"})


if __name__ == "__main__":
    app.run(debug=True)
