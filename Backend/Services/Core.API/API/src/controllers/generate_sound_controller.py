import os
from datetime import datetime
from urllib.parse import urljoin
from urllib.request import pathname2url
from pygame.locals import *
from flask import jsonify, Blueprint, request
from enums.background_types import BackgroundTypes
from enums.binaural_types import BinauralTypes
from global_enviroment import GlobalEnviroment
from helpers.management_sound import ManagementSound
from models.background import Background
from models.create_sound_binaural_model import CreateSoundBinauralModel
from models.generate_sound_model import GenerateSoundModel
from models.load_sound_background_model import LoadSoundBackgroundModel
from models.merge_sound_model import MergeSoundModel
from services.generate_sound_service import GenerateSoundService
from startup import Startup

startup:Startup = Startup()
enviroment:GlobalEnviroment = startup.get_enviroment()
sound_manage:ManagementSound = startup.get_sound_manage()
background:Background = startup.get_background()
generate_sound_service:GenerateSoundService = startup.get_generate_sound_service()
generate_sound_bp:Blueprint = Blueprint('generate', __name__)

@generate_sound_bp.route('/generate/', methods=['GET', 'POST'])
def generate():
    content = request.json
    status_code, has_error, errors = validation_form(content)

    if(has_error): return jsonify({
        "status_code":status_code,
        "url_sound":None,
        "has_error":has_error,
        "errors":errors
    })
    
    model = GenerateSoundModel(BinauralTypes[content["typeBinaural"]].name, BackgroundTypes[content["typeBackground"]].name, content["time"])
    
    enviroment.set_duration(model.get_time())

    model_merge_sound = generate_merge_sound(model, enviroment.get_duration(), enviroment.get_format())

    filepath:str = generate_sound_service.merge_sound(model_merge_sound)

    file = file_path_to_url(filepath)

    result = {
        "status_code":status_code,
        "url_sound":file,
        "has_error":has_error,
        "errors":errors
    }

    return jsonify(result)

def validation_form(content):
    errors = []
    has_error = False
    status_code = 200

    try:
        BinauralTypes[content["typeBinaural"]]
    except:
        status_code = 404
        errors.append("Not exist - Binaural sound type incompatible with the existing ones")

    try:
        BackgroundTypes[content["typeBackground"]]
    except:
        status_code = 404
        errors.append("Not exist - Background sound type incompatible with the existing ones")

    if len(errors) > 0:
        has_error = True

    return status_code, has_error, errors

def file_path_to_url(filepath):
    filename = filepath.split("merge")[1]
    path = os.path.dirname(os.path.realpath(f"{filepath}{filename}"))
    return urljoin('file:', pathname2url(path)) 

def generate_merge_sound(model:GenerateSoundModel, time, format):
    name_sound_binaural:str = f"binaural_{model.get_binaural_type()}_{time}"
    background.set_type(model.get_background_type())
    model_create_sound_binaural = CreateSoundBinauralModel(name_sound_binaural, time, enviroment.get_path_sounds_binaural(), format)
    model_load_sound_background = LoadSoundBackgroundModel(time, f"{enviroment.get_path_sounds_background()}/{model.get_background_type()}", format)
    
    if(sound_manage.verify_exist_sound(name_sound_binaural, enviroment.get_path_sounds_binaural(), format) == False):
        generate_sound_service.create_sound_binaural(model_create_sound_binaural)

    sound_binaural_load = sound_manage.import_sound(enviroment.get_path_sounds_binaural(), f"{name_sound_binaural}.{format}")
    sound_background_load = generate_sound_service.load_sound_background(model_load_sound_background)

    model_merge_sound = MergeSoundModel(sound_binaural_load, sound_background_load, 
                                        model.get_binaural_type(), model.get_background_type(), time, 
                                        datetime.now().date().isoformat(), enviroment.get_path_sounds_merge(), format)

    return model_merge_sound