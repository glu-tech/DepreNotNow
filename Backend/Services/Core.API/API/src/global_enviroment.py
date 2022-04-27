import pygame
import os

class GlobalEnviroment:
    def __init__(self, duration=0, format="wav", channel=2, sampwidth=2, 
                path_sounds_background= "/sounds/background", 
                path_sounds_binaural= "/sounds/binaural", 
                path_sounds_merge= "/sounds/merge"):
        self.__bits_sound = 16
        self.__sample_rate = 44100
        self.__duration = duration
        self.__n_samples = self.set_automatic_n_samples()
        self.__format = format
        self.__channel = channel
        self.__sampwidth = sampwidth
        self.__dirname = os.path.dirname(os.path.realpath('__file__'))
        self.__path_sounds_background = f"{self.__dirname}{path_sounds_background}"
        self.__path_sounds_binaural = f"{self.__dirname}{path_sounds_binaural}"
        self.__path_sounds_merge = f"{self.__dirname}{path_sounds_merge}"

    def get_bits_sound(self):
        return self.__bits_sound

    def get_n_samples(self):
        self.set_automatic_n_samples()
        return self.__n_samples

    def get_sample_rate(self):
        return self.__sample_rate

    def get_format(self):
        return self.__format

    def get_channel(self):
        return self.__channel

    def get_sampwidth(self):
        return self.__sampwidth

    def get_duration(self):
        return self.__duration

    def get_path_sounds_background(self):
        return self.__path_sounds_background

    def get_path_sounds_binaural(self):
        return self.__path_sounds_binaural

    def get_path_sounds_merge(self):
        return self.__path_sounds_merge

    def set_duration(self, duration):
        if duration > 0:
            self.__duration = duration

    def set_format(self, format):
        if format != "":
            self.__format = format
            
    def set_channel(self, channel):
        if channel > 0:
            self.__channel = channel

    def set_sampwidth(self, sampwidth):
        if sampwidth > 0:
            self.__sampwidth = sampwidth

    def set_path_sounds_background(self, path_sounds_background):
        if path_sounds_background != "":
            self.__path_sounds_background = path_sounds_background

    def set_path_sounds_binaural(self, path_sounds_binaural):
        if path_sounds_binaural != "":
            self.__path_sounds_binaural = path_sounds_binaural

    def set_path_sounds_merge(self, path_sounds_merge):
        if path_sounds_merge != "":
            self.__path_sounds_merge = path_sounds_merge

    def set_automatic_n_samples(self):
        self.__n_samples = int(round(self.__duration*self.__sample_rate))

    def inicialize_pygame(self):
        pygame.mixer.pre_init(self.__sample_rate, -self.__bits_sound, 2)
        pygame.init()

    def exit_pygame(self):
        pygame.quit()