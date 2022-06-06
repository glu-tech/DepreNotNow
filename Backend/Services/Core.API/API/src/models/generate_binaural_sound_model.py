from filters.binaural.handle_set import HandleSet
from models.request_handle_model import RequestHandleModel
from enums.binaural_types import BinauralTypes

class GenerateBinauralSoundModel:      
    def __init__(self, sound_manage):
        self.__sound_manage =  sound_manage

    def generate_binaural_sound(self, time, name_sound:str, binaural):
        type = BinauralTypes[name_sound.split("_")[1]]

        return HandleSet().set_handle().handle(
            request=RequestHandleModel(
                type = type.name, 
                sound_manage = self.__sound_manage, 
                time = time,
                name_sound = name_sound,
                binaural = binaural
            ))