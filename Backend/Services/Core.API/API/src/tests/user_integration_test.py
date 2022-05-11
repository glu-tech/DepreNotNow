from datetime import datetime
import json

from re import search
from ..app import app

url_base = "/api/core/user"
content_type = "application/json"

def test_capture_user_name_endpoint():
    username = "lucas"
    response = app.test_client().post(f'{url_base}/name/', data=json.dumps({
                                        'username': username,
                                    }), content_type=content_type)

    assert response.status_code == 201
    assert response.json["has_error"] == False
    assert search(datetime.now().date().isoformat(), response.json["user"]["date"])
    assert search(username, response.json["user"]["username"])

def test_report_user_name_endpoint():
    response = app.test_client().get(f'{url_base}/name/', content_type=content_type)

    assert response.status_code == 200
    assert response.json["has_error"] == False
    assert search(datetime.now().date().isoformat(), response.json["url_dataset"])
    assert search(".csv", response.json["url_dataset"])

def test_capture_user_feeling_endpoint():
    feeling = "happy"
    response = app.test_client().post(f'{url_base}/feeling/', data=json.dumps({
                                        'feeling': feeling,
                                    }), content_type=content_type)

    assert response.status_code == 201
    assert response.json["has_error"] == False
    assert search(datetime.now().date().isoformat(), response.json["feeling"]["date"])
    assert search(feeling, response.json["feeling"]["feeling"])

def test_report_user_feeling_endpoint():
    response = app.test_client().get(f'{url_base}/feeling/', content_type=content_type)

    assert response.status_code == 200
    assert response.json["has_error"] == False
    assert search(datetime.now().date().isoformat(), response.json["url_dataset"])
    assert search(".csv", response.json["url_dataset"])
