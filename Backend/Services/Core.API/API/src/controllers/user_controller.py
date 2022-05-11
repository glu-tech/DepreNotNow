import os
from datetime import datetime
from flask import Blueprint, jsonify, request
from flask_restx import Resource, Namespace
from ..services.logs_service import LogsService
from ..services.user_service import UserService

api = Namespace('User',description="Requests to survey how many users using app and how they feel")
user_name_bp:Blueprint = Blueprint('user_name', __name__)
user_feeling_bp:Blueprint = Blueprint('user_feeling', __name__)
user_service = UserService(f"{os.path.dirname(os.path.realpath('__file__'))}/reports")

@api.route('/name')
class UserNameController(Resource):
    @api.response(200, "Capture name success")
    @api.response(412, "Required name for request")
    @api.response(400, "Some unhandled error occurred")
    @user_name_bp.route('/name/', methods=['POST'])
    def post():
        content = request.json

        if(len(content) == 0 or not ("username" in content)):
            return jsonify({
                "status_code":412,
                "user":{},
                "has_error":True,
                "errors":[{"title": "Need content", "description": "Required username for request"}]
            }), 412

        user_service.username_save(content['username'], datetime.now().date().isoformat(), request.remote_addr)
        LogsService().generate_log_info("Registred in reports username success!")

        return jsonify({
                "status_code":201,
                "user":{"username": content['username'], 
                        "date": datetime.now().date().isoformat(), 
                        "ip": request.remote_addr},
                "has_error":False,
                "errors":[]
            }), 201

    @api.response(200, "Report generate success")
    @user_name_bp.route('/name/', methods=['GET'])
    def get():
        url = user_service.generate_reports_user_access()

        return jsonify({
                "status_code":200,
                "url_dataset": url,
                "has_error":False,
                "errors":[]
            }), 200

@api.route('/feeling')
class UserFeelingController(Resource):
    @api.response(200, "Capture feeling success")
    @api.response(412, "Required feeling for request")
    @api.response(400, "Some unhandled error occurred")
    @user_feeling_bp.route('/feeling/', methods=['POST'])
    def post():
        content = request.json

        if(len(content) == 0 or not ("feeling" in content)):
            return jsonify({
                "status_code":412,
                "user":{},
                "has_error":True,
                "errors":[{"title": "Need content", "description": "Required feeling for request"}]
            }), 412

        user_service.feeling_save(content['feeling'], datetime.now().date().isoformat())
        LogsService().generate_log_info("Registred in reports feeling success!")

        return jsonify({
                "status_code":201,
                "feeling":{"feeling": content['feeling'], "date": datetime.now().date().isoformat()},
                "has_error":False,
                "errors":[]
            }), 201

    @api.response(200, "Report generate success")
    @user_feeling_bp.route('/feeling/', methods=['GET'])
    def get():
        url = user_service.generate_reports_user_feeling()

        return jsonify({
                "status_code":200,
                "url_dataset": url,
                "has_error":False,
                "errors":[]
            }), 200