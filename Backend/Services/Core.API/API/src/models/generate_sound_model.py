class GenerateSoundModel():
    def __init__(self, binaural_type, background_type, time:int):
        self.__binaural_type = binaural_type
        self.__background_type = background_type
        self.__binaural_type = binaural_type
        self.__time:int = time

    def get_binaural_type(self):
        return self.__binaural_type

    def get_background_type(self):
        return self.__background_type

    def get_time(self):
        return self.__time