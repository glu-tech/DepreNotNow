import os
from datetime import datetime
from flask import Blueprint, request
from flask_restx import Resource, Namespace
from services.logs_service import LogsService
from services.user_service import UserService

api = Namespace('User',description="Requests to survey how many users using app and how they feel")
user_bp:Blueprint = Blueprint('user', __name__)
user_service = UserService(f"{os.path.dirname(os.path.realpath('__file__'))}/reports")

@api.route('/name')
class UserNameController(Resource):
    @api.response(200, "Capture name success")
    @api.response(412, "Required name for request")
    @api.response(400, "Some unhandled error occurred")
    def post(self):
        content = request.json

        if(len(content) == 0 or not ("username" in content)):
            return "Required username for request", 412

        user_service.username_save(content['username'], datetime.now().date().isoformat(), request.remote_addr)
        LogsService().generate_log_info("Registred in reports username success!")

        return None, 201

@api.route('/feeling')
class UserFeelingController(Resource):
    @api.response(200, "Capture feeling success")
    @api.response(412, "Required feeling for request")
    @api.response(400, "Some unhandled error occurred")
    def post(self):
        content = request.json

        if(len(content) == 0 or not ("feeling" in content)):
            return "Required feeling for request", 412

        user_service.feeling_save(content['feeling'], datetime.now().date().isoformat())
        LogsService().generate_log_info("Registred in reports feeling success!")

        return None, 201
