class RequestHandleModel:
    def __init__(self, sound_manage, type, time, name_sound, binaural):
        self.__sound_manage = sound_manage 
        self.__type = type
        self.__time = time
        self.__name_sound = name_sound
        self.__binaural = binaural

    def get_sound_manage(self):
        return self.__sound_manage

    def get_type(self):
        return self.__type

    def get_time(self):
        return self.__time

    def get_name_sound(self):
        return self.__name_sound

    def get_binaural(self):
        return self.__binaural