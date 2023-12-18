from flask import render_template, Flask, make_response, request, redirect, flash, render_template_string
import os, json, logging

log = logging.getLogger("werkzeug")
log.setLevel(logging.ERROR)

app = Flask(__name__)
app.secret_key = os.urandom(256)

@app.route("/")
def homepage():
  return render_template("index.html")

app.run("0.0.0.0", 8080)