from flask import Flask, render_template, request, jsonify, session, redirect, url_for
import mysql.connector
import json
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.secret_key = "smartresume-secret-key"


# ================= DATABASE CONNECTION =================

def get_db_connection():

    connection = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="smartresume"
    )

    return connection

# ================= REGISTER =================

@app.route("/register", methods=["GET", "POST"])
def register():

    if request.method == "POST":

        name = request.form["name"]

        email = request.form["email"]

        password = request.form["password"]


        connection = get_db_connection()

        cursor = connection.cursor()


        # Check if email already exists

        cursor.execute(
            "SELECT id FROM users WHERE email = %s",
            (email,)
        )

        existing_user = cursor.fetchone()


        if existing_user:

            cursor.close()

            connection.close()

            return render_template(
                "register.html",
                error="Email already registered."
            )


        # Encrypt password

        hashed_password = generate_password_hash(password)


        query = """
            INSERT INTO users
            (name, email, password)
            VALUES (%s, %s, %s)
        """


        cursor.execute(
            query,
            (name, email, hashed_password)
        )


        connection.commit()

        cursor.close()

        connection.close()


        return redirect(url_for("login"))


    return render_template("register.html")

# ================= LOGIN =================

@app.route("/login", methods=["GET", "POST"])
def login():

    if request.method == "POST":

        email = request.form["email"]

        password = request.form["password"]


        connection = get_db_connection()

        cursor = connection.cursor(dictionary=True)


        cursor.execute(
            "SELECT * FROM users WHERE email = %s",
            (email,)
        )


        user = cursor.fetchone()


        cursor.close()

        connection.close()


        if user and check_password_hash(
            user["password"],
            password
        ):

            session["user_id"] = user["id"]

            session["user_name"] = user["name"]

            return redirect(url_for("dashboard"))


        return render_template(
            "login.html",
            error="Invalid email or password."
        )


    return render_template("login.html")

@app.route("/dashboard")
def dashboard():

    if "user_id" not in session:
        return redirect(url_for("login"))

    return render_template(
        "dashboard.html"
    )

# ================= LOGOUT =================

@app.route("/logout")
def logout():

    session.clear()

    return redirect(url_for("login"))

# ================= HOME PAGE =================

@app.route("/")
def home():

    return render_template("index.html")


# ================= TEST DATABASE =================

@app.route("/test-db")
def test_db():

    connection = get_db_connection()

    if connection.is_connected():

        connection.close()

        return "Database connected successfully!"

    return "Database connection failed!"


# ================= SAVE RESUME =================

@app.route("/save-resume", methods=["POST"])
def save_resume():

    if "user_id" not in session:
        return jsonify({
            "message": "Please login first."
        }), 401

    data = request.get_json()

    name = data.get("name", "")
    email = data.get("email", "")
    phone = data.get("phone", "")

    resume_data = json.dumps(data)

    user_id = session["user_id"]

    # Check whether we are updating an existing resume
    resume_id = data.get("resume_id")

    connection = get_db_connection()
    cursor = connection.cursor()

    if resume_id:

        # Update existing resume
        query = """
            UPDATE resumes
            SET name = %s,
                email = %s,
                phone = %s,
                resume_data = %s
            WHERE id = %s
            AND user_id = %s
        """

        values = (
            name,
            email,
            phone,
            resume_data,
            resume_id,
            user_id
        )

        cursor.execute(query, values)

        message = "Resume updated successfully!"

    else:

        # Create a new resume
        query = """
            INSERT INTO resumes
            (name, email, phone, resume_data, user_id)
            VALUES (%s, %s, %s, %s, %s)
        """

        values = (
            name,
            email,
            phone,
            resume_data,
            user_id
        )

        cursor.execute(query, values)

        message = "Resume saved successfully!"

    connection.commit()

    cursor.close()
    connection.close()

    return jsonify({
        "success": True,
        "message": message
    })


# ================= LOAD RESUME =================

@app.route("/load-resume")
def load_resume():

    connection = get_db_connection()

    cursor = connection.cursor(dictionary=True)

    query = """
        SELECT *
        FROM resumes
        ORDER BY id DESC
        LIMIT 1
    """

    cursor.execute(query)

    resume = cursor.fetchone()

    cursor.close()
    connection.close()

    if resume:

        return jsonify({
            "success": True,
            "data": json.loads(resume["resume_data"])
        })

    return jsonify({
        "success": False,
        "message": "No saved resume found."
    })

# ================= GET ALL RESUMES =================

@app.route("/resumes")
def get_resumes():

    if "user_id" not in session:

        return jsonify([])


    user_id = session["user_id"]


    connection = get_db_connection()

    cursor = connection.cursor(dictionary=True)


    query = """
        SELECT id, name, email, phone
        FROM resumes
        WHERE user_id = %s
        ORDER BY id DESC
    """


    cursor.execute(query, (user_id,))

    resumes = cursor.fetchall()


    cursor.close()

    connection.close()


    return jsonify(resumes)


# ================= LOAD SPECIFIC RESUME =================

@app.route("/load-resume/<int:resume_id>")
def load_specific_resume(resume_id):

    if "user_id" not in session:

        return jsonify({
            "success": False,
            "message": "Please login first."
        }), 401


    user_id = session["user_id"]


    connection = get_db_connection()

    cursor = connection.cursor(dictionary=True)


    query = """
        SELECT *
        FROM resumes
        WHERE id = %s
        AND user_id = %s
    """


    cursor.execute(
        query,
        (resume_id, user_id)
    )


    resume = cursor.fetchone()


    cursor.close()

    connection.close()


    if resume:

        return jsonify({
            "success": True,
            "data": json.loads(
                resume["resume_data"]
            )
        })


    return jsonify({
        "success": False,
        "message": "Resume not found."
    })


# ================= DELETE RESUME =================

@app.route(
    "/delete-resume/<int:resume_id>",
    methods=["POST"]
)
def delete_resume(resume_id):

    if "user_id" not in session:

        return jsonify({
            "success": False,
            "message": "Please login first."
        }), 401


    user_id = session["user_id"]


    connection = get_db_connection()

    cursor = connection.cursor()


    query = """
        DELETE FROM resumes
        WHERE id = %s
        AND user_id = %s
    """


    cursor.execute(
        query,
        (resume_id, user_id)
    )


    connection.commit()


    cursor.close()

    connection.close()


    return jsonify({
        "success": True,
        "message": "Resume deleted successfully!"
    })

# ================= START FLASK =================

if __name__ == "__main__":

    app.run(debug=True)