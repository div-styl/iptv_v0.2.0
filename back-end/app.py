from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mail import Mail, Message
import os
app = Flask(__name__)

app.config['SECRET_KEY'] = "tsfyguaistyatuis589566875623568956"

app.config['MAIL_SERVER'] = "smtp.googlemail.com"

app.config['MAIL_PORT'] = 587

app.config['MAIL_USE_TLS'] = True

app.config['MAIL_USERNAME'] = os.environ.get('USR_MAIL')

app.config['MAIL_PASSWORD'] = os.environ.get('USR_PASS')

CORS(app)
mail = Mail(app)


@app.route("/submit-form", methods=["GET", "POST"])
def submit_form():
    try:
        data = request.get_json()
        # Process the form data, e.g., send an email, store in a database
        print("Received form data:", data)
        # Send an email using the function below
        send_email(data)
        # Return a response indicating success
        return jsonify({"message": "Form data received and email sent from Flask"}), 200
    except Exception as e:
        # Handle errors and return an error response
        print("Error:", str(e))
        return jsonify({"error": "Failed to process the form or send an email"}), 400


def send_email(data):
    try:
        first_name = data.get("first_name")
        last_name = data.get("last_name")
        email = data.get("email")
        subject = data.get("subject")
        message = data.get("message")
        
        # Use HTML tags for bold text within the email body
        body = f"Email from: <b>{first_name} {last_name} ({email})</b><br><br><b>Subject:</b> {subject}<br><br><b>Message:</b><br>{message}"
        
        msg = Message(
            subject=subject,
            html=body,  # Set the HTML content for the email body
            sender=email,
            recipients=[usr_mail]
        )
        mail.send(msg)
    except Exception as e:
        print("Error sending email:", str(e))

if __name__ == "__main__":
    app.run(debug=True)
