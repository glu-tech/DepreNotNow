class CreateSoundBinauralModel():
    def __init__(self, name_sound, time, path, format):
        self.__name_sound = name_sound
        self.__time = time
        self.__path = path
        self.__format = format

    def get_name_sound(self):
        return self.__name_sound

    def get_time(self):
        return self.__time

    def get_path(self):
        return self.__path

    def get_format(self):
        return self.__format
