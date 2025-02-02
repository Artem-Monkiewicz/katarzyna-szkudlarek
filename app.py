import os
from flask import Flask, request, jsonify
from flask_mail import Mail, Message
from dotenv import load_dotenv

# Load variables from .env
load_dotenv()

app = Flask(__name__)

# Настройки почты
app.config['MAIL_SERVER'] = 'smtp.gmail.com'  # or anoyher SMTP-server
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv("MAIL_USERNAME")  # Your email
app.config['MAIL_PASSWORD'] = os.getenv("MAIL_PASSWORD")  # Your password
app.config['MAIL_DEFAULT_SENDER'] = os.getenv("MAIL_USERNAME")

mail = Mail(app)

@app.route("/send_email", methods=["POST"])
def send_email():
    try:
        name = request.form["name"]
        email = request.form["email"]
        subject = request.form["subject"]
        message = request.form["message"]

        msg = Message(subject=f"Nowa wiadomość od {name}",
                      sender=email,
                      recipients=["your_email@gmail.com"])
        msg.body = f"Od: {name} ({email})\n\nTemat: {subject}\n\nWiadomość:\n{message}"

        mail.send(msg)

        return jsonify({"success": True}), 200
    except Exception as e:
        print("Błąd:", str(e))
        return jsonify({"success": False, "error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)