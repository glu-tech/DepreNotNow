class LoadSoundBackgroundModel():
    def __init__(self, time, path, format):
        self.__time = time
        self.__path = path
        self.__format = format

    def get_path(self):
        return self.__path

    def get_format(self):
        return self.__format

    def get_time(self):
        return self.__time