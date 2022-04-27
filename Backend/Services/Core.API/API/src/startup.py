from global_enviroment import GlobalEnviroment
from models.background import Background
from models.generate_binaural_sound_model import GenerateBinauralSoundModel
from utils.configurations_os import ConfigurationsOS
from utils.configurations_sound import ConfigurationsSounds
from helpers.management_sound import ManagementSound
from models.binaural import Binaural
from utils.download_background_sounds import DownloadBackgroundSounds

class Startup:
    def __init__(self):
        self.__enviroment = GlobalEnviroment()
        self.__os_config = ConfigurationsOS()
        self.__sound_config = ConfigurationsSounds()
        self.__sound_manage = ManagementSound(self.__os_config)
        self.__generate_sound_binaural = GenerateBinauralSoundModel(self.__sound_manage)
        self.__download_background_sounds = DownloadBackgroundSounds(self.__os_config, self.__sound_manage, self.__enviroment)
        self.__background = Background(self.__enviroment.get_path_sounds_background(), self.__sound_manage, self.__sound_config)
        self.__binaural = Binaural(self.__enviroment.get_bits_sound(), self.__enviroment.get_sample_rate(), 
                            self.__enviroment.get_channel(), self.__enviroment.get_sampwidth(), 
                            self.__enviroment.get_path_sounds_binaural(), self.__enviroment.get_format(), 
                            self.__sound_manage, self.__os_config)

    def get_binaural(self):
        return self.__binaural

    def get_enviroment(self):
        return self.__enviroment

    def get_os_config(self):
        return self.__os_config

    def get_sound_config(self):
        return self.__sound_config

    def get_sound_manage(self):
        return self.__sound_manage

    def get_background(self):
        return self.__background

    def get_generate_binaural(self):
        return self.__generate_sound_binaural

    def start(self):
        self.__enviroment.inicialize_pygame()
        self.download_sounds_background()

    def download_sounds_background(self):
        url = "https://www.youtube.com/watch?v="
        audios = {
            "indie": [f"{url}tSp1nWbUGc8", f"{url}pBVX-5zFS9w"],
            "lofi": [f"{url}wAPCSnAhhC8", f"{url}1fueZCTYkpA"],
            "safe_rock": [f"{url}a48_Q1b0nas", f"{url}bXrBz88lec0"]
        }
        
        self.__download_background_sounds.downloadAllMusic(audios)
        return