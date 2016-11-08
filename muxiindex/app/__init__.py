# coding: utf-8
"""
    muxiwebsite: 木犀团队的官网
    ~~~~~~~~~~~~~~~~~~~~~~~~~
    木犀团队是华中师范大学自由的学生互联网团队，分为

        web(前端、后台)，设计， 安卓，产品 组

    ~我们在路上，
        前方不会太远~。
"""

import os
import time
from flask import Flask, redirect, url_for, render_template, request


app = Flask(__name__) # Instance Creation

# Configs
app.config['SECRET_KEY'] = "I hate flask!" # Secret Key Config
app.config['SERVER_NAME'] = os.environ.get("MUXI_WEBSITE_SERVERNAME") # Domain Config



def is_mobile():
    """ Platform Check: return true for mobile users """
    platform = request.user_agent.platform
    if platform in ["android", "iphone", "ipad"]:
        return True
    else:
        return False


@app.route('/')
def index():
    """ Index page """
    current_year = time.strftime("%Y", time.localtime())
    if is_mobile():
        return render_template("index_m.html", current_year=current_year)
    else:
        return render_template('index_d.html')


@app.route('/join')
def join():
    """ Join-us Page """
    if is_mobile():
        return render_template("join_m.html")
    else:
        return render_template('join_d.html')
