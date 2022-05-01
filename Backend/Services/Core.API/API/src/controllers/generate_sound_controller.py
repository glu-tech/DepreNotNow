from flask_restx import Namespace, Resource, fields
from pygame.locals import *
from flask import jsonify, Blueprint, request
from enums.background_types import BackgroundTypes
from enums.binaural_types import BinauralTypes
from global_enviroment import GlobalEnviroment
from helpers.management_sound import ManagementSound
from models.background import Background
from models.generate_sound_model import GenerateSoundModel
from services.generate_sound_service import GenerateSoundService
from startup import Startup

startup:Startup = Startup()
enviroment:GlobalEnviroment = startup.get_enviroment()
os_config = startup.get_os_config()
sound_manage:ManagementSound = startup.get_sound_manage()
background:Background = startup.get_background()
generate_sound_service:GenerateSoundService = startup.get_generate_sound_service()
generate_sound_bp:Blueprint = Blueprint('generate', __name__)
api = Namespace("Sound", description="Generate Sound")

model = api.model('SoundModel', {
    'typeBinaural': fields.String,
    'typeBackground': fields.String,
    'time': fields.Float
})

@api.route('/generate')
class GenerateSoundController(Resource):
    @api.response(200, "Binaural sound generated success")
    @api.response(404, "Type of sound not found")
    @api.response(408, "Time exceeded when generating the audio")
    @api.response(400, "Some unhandled error occurred")
    @api.expect(model)
    @generate_sound_bp.route('/generate/', methods=['GET', 'POST'])
    def post():
        content = request.json
        status_code, has_error, errors = generate_sound_service.validation_form(content)

        if(has_error): return jsonify({
            "status_code":status_code,
            "url_sound":None,
            "has_error":has_error,
            "errors":errors
        }), status_code
        
        model = GenerateSoundModel(BinauralTypes[content["typeBinaural"]].name, BackgroundTypes[content["typeBackground"]].name, content["time"])
        enviroment.set_duration(model.get_time())

        model_merge_sound = generate_sound_service.generate_merge_sound(model, enviroment.get_duration(), enviroment.get_format())

        filepath:str = generate_sound_service.merge_sound(model_merge_sound)
        file = os_config.file_path_to_url(filepath)

        return jsonify({
            "status_code":status_code,
            "url_sound":file,
            "has_error":has_error,
            "errors":errors
        }), status_code