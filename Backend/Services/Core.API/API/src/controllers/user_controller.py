from flask_restx import Resource, Namespace

api = Namespace('User',description="Requests to survey how many users using app and how they feel")

@api.route('/name')
class UserNameController(Resource):
    @api.response(200, "Capture name success")
    @api.response(400, "Some unhandled error occurred")
    def post(self):
        return "", 200

@api.route('/feeling')
class UserFeelingController(Resource):
    @api.response(200, "Capture feeling success")
    @api.response(400, "Some unhandled error occurred")
    def post(self):
        return "", 200