from datetime import datetime
import os

from re import search
from services.generate_sound_service import GenerateSoundService
from startup import Startup
from global_enviroment import GlobalEnviroment
from helpers.management_sound import ManagementSound
from models.background import Background
from models.generate_sound_model import GenerateSoundModel
from enums.binaural_types import BinauralTypes
from enums.background_types import BackgroundTypes

startup:Startup = Startup()
enviroment:GlobalEnviroment = startup.get_enviroment()
os_config = startup.get_os_config()
aws_service = startup.get_aws_service()
sound_manage:ManagementSound = startup.get_sound_manage()
background:Background = startup.get_background()
generate_sound_service:GenerateSoundService = startup.get_generate_sound_service()

def test_merge_sound_service():    
    type_binaural = "calm"
    type_background = "safe_rock"
    time = 10
    
    if(os.environ.get('CREATE_BINAURAL') and bool(os.environ.get('CREATE_BINAURAL')) == True):
        return

    model = GenerateSoundModel(BinauralTypes[type_binaural].name, BackgroundTypes[type_background].name, time)
    enviroment.set_duration(model.get_time())
    response = generate_sound_service.generate_merge_sound(model, enviroment.get_duration(), enviroment.get_format())
    
    assert response._MergeSoundModel__type_background == type_background
    assert response._MergeSoundModel__type_binaural == type_binaural
    assert response._MergeSoundModel__time == time
    assert search("merge", response._MergeSoundModel__path)
    assert response._MergeSoundModel__format == "wav"