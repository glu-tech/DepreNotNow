class MergeSoundModel():
    def __init__(self, binaural, background, type_binaural, type_background, time, date, path, format):
        self.__binaural = binaural
        self.__background = background
        self.__type_binaural = type_binaural
        self.__type_background = type_background
        self.__time = time
        self.__date = date
        self.__path = path
        self.__format = format

    def get_binaural(self):
        return self.__binaural

    def get_background(self):
        return self.__background

    def get_type_binaural(self):
        return self.__type_binaural

    def get_type_background(self):
        return self.__type_background

    def get_time(self):
        return self.__time

    def get_date(self):
        return self.__date

    def get_path(self):
        return self.__path

    def get_format(self):
        return self.__format