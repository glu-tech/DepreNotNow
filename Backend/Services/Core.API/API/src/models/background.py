from ..helpers.management_sound import ManagementSound
from ..utils.configurations_sound import ConfigurationsSounds

class Background:
    def __init__(self, path_sounds_background, sound_manage:ManagementSound, sound_config:ConfigurationsSounds):
        self.__path_sounds_background = path_sounds_background
        self.__type = ""
        self.__sound_manage:ManagementSound = sound_manage
        self.__sound_config:ConfigurationsSounds = sound_config

    def set_type(self, type):
        self.__type = type

    def generate_background_sound(self, sounds, time):
        sound = self.__sound_manage.combined_sound(sounds)
        duration = self.__sound_manage.capture_duration_time_sound(sound)
        result_time = duration - time

        while duration < time:
            sound = self.generate_background_sound(sounds, result_time)

        if result_time > 0:
            sound = self.__sound_config.cut_sound(result_time, sound)

        return sound

    def select_background_sounds(self, filename_sounds, duration):
        sounds = []

        for i in range(len(filename_sounds)):
            sounds.append(self.__sound_manage.import_sound(f"{self.__path_sounds_background}/{self.__type}", filename_sounds[i]))

        return self.generate_background_sound(sounds, time=duration * 1000)