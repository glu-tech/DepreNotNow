from datetime import datetime
from enums.background_types import BackgroundTypes
from enums.binaural_types import BinauralTypes
from global_enviroment import GlobalEnviroment
from helpers.management_sound import ManagementSound
from models.background import Background
from models.binaural import Binaural
from models.create_sound_binaural_model import CreateSoundBinauralModel
from models.generate_binaural_sound_model import GenerateBinauralSoundModel
from models.generate_sound_model import GenerateSoundModel
from models.load_sound_background_model import LoadSoundBackgroundModel
from models.merge_sound_model import MergeSoundModel
from utils.configurations_os import ConfigurationsOS
from utils.configurations_sound import ConfigurationsSounds

class GenerateSoundService:
    def __init__(self, os_config:ConfigurationsOS, sound_config:ConfigurationsSounds, sound_manage:ManagementSound, 
    background:Background, binaural:Binaural, generate_binaural_model:GenerateBinauralSoundModel, enviroment:GlobalEnviroment):
        self.__os_config:ConfigurationsOS = os_config
        self.__sound_config:ConfigurationsSounds = sound_config
        self.__sound_manage:ManagementSound = sound_manage
        self.__background:Background = background
        self.__binaural:Binaural = binaural
        self.__generate_binaural_model:GenerateBinauralSoundModel = generate_binaural_model
        self.__enviroment:GlobalEnviroment = enviroment

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
            f"sound_{model.get_type_binaural()}_{model.get_type_background()}_{model.get_time()}", 
            model.get_format())
        return file.name

    def generate_merge_sound(self, model:GenerateSoundModel, time, format):
        name_sound_binaural:str = f"binaural_{model.get_binaural_type()}_{time}"
        self.__background.set_type(model.get_background_type())
        model_create_sound_binaural = CreateSoundBinauralModel(name_sound_binaural, time, self.__enviroment.get_path_sounds_binaural(), format)
        model_load_sound_background = LoadSoundBackgroundModel(time, f"{self.__enviroment.get_path_sounds_background()}/{model.get_background_type()}", format)
        
        if(self.__sound_manage.verify_exist_sound(name_sound_binaural, self.__enviroment.get_path_sounds_binaural(), format) == False):
            self.create_sound_binaural(model_create_sound_binaural)

        sound_binaural_load = self.__sound_manage.import_sound(self.__enviroment.get_path_sounds_binaural(), f"{name_sound_binaural}.{format}")
        sound_background_load = self.load_sound_background(model_load_sound_background)

        model_merge_sound = MergeSoundModel(sound_binaural_load, sound_background_load, 
                                            model.get_binaural_type(), model.get_background_type(), time, 
                                            datetime.now().date().isoformat(), self.__enviroment.get_path_sounds_merge(), format)

        return model_merge_sound

    def validation_form(self, content):
        errors = []
        has_error = False
        status_code = 201

        try:
            content["typeBinaural"]
            BinauralTypes[content["typeBinaural"]]
        except:
            status_code = 404
            errors.append("Not exist - Binaural sound type incompatible with the existing ones")

        try:
            content["typeBackground"]
            BackgroundTypes[content["typeBackground"]]
        except:
            status_code = 404
            errors.append("Not exist - Background sound type incompatible with the existing ones")
            
        try:
            content["time"]
        except:
            status_code = 404
            errors.append("Not exist - Parameter time necessary for request")

        if len(errors) > 0:
            has_error = True

        return status_code, has_error, errors 