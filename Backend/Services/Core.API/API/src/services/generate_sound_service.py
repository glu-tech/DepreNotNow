from helpers.management_sound import ManagementSound
from models.background import Background
from models.binaural import Binaural
from models.create_sound_binaural_model import CreateSoundBinauralModel
from models.generate_binaural_sound_model import GenerateBinauralSoundModel
from models.load_sound_background_model import LoadSoundBackgroundModel
from models.merge_sound_model import MergeSoundModel
from utils.configurations_os import ConfigurationsOS
from utils.configurations_sound import ConfigurationsSounds

class GenerateSoundService:
    def __init__(self, os_config:ConfigurationsOS, sound_config:ConfigurationsSounds, sound_manage:ManagementSound, 
    background:Background, binaural:Binaural, generate_binaural_model:GenerateBinauralSoundModel):
        self.__os_config:ConfigurationsOS = os_config
        self.__sound_config:ConfigurationsSounds = sound_config
        self.__sound_manage:ManagementSound = sound_manage
        self.__background:Background = background
        self.__binaural:Binaural = binaural
        self.__generate_binaural_model:GenerateBinauralSoundModel = generate_binaural_model

    def create_sound_binaural(self, model:CreateSoundBinauralModel):
        sound = self.__generate_binaural_model.generate_binaural_sound(model.get_time(), model.get_name_sound(), self.__binaural)

        if(sound != None):
            self.__sound_manage.export_sound(sound, model.get_path(), model.get_name_sound(), model.get_format())

    def load_sound_background(self, model:LoadSoundBackgroundModel):
        sound_background_filenames = self.__os_config.get_name_files_path(model.get_path(), model.get_format())
        return self.__background.select_background_sounds(sound_background_filenames, model.get_time())

    def merge_sound(self, model:MergeSoundModel):
        sound = self.__sound_config.configuration_sounds_final(model.get_binaural(), model.get_background())
        file = self.__sound_manage.export_sound(sound, model.get_path(), 
            f"sound_{model.get_type_binaural()}_{model.get_type_background()}_{model.get_time()}_{model.get_date()}", 
            model.get_format())
        return file.name