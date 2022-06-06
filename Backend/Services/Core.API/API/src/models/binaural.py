import array
import numpy
import math
import wave
import pygame
from utils.configurations_os import ConfigurationsOS
from helpers.management_sound import ManagementSound

class Binaural:
    def __init__(self, bits_sound, sample_rate, channel, 
                sampwidth, path_sounds_binaural, format, 
                sound_manage:ManagementSound, os_config:ConfigurationsOS):
        self.__bits_sound = bits_sound
        self.__sample_rate = sample_rate
        self.__channel = channel
        self.__sampwidth = sampwidth
        self.__path_sounds_binaural = path_sounds_binaural
        self.__format = format
        self.__sound_manage:ManagementSound = sound_manage
        self.__os_config:ConfigurationsOS = os_config

    def get_bits_sound(self):
        return self.__bits_sound

    def get_sample_rate(self):
        return self.__sample_rate

    def get_channel(self):
        return self.__channel

    def get_sampwidth(self):
        return self.__sampwidth

    def get_path_sounds_binaural(self):
        return self.__path_sounds_binaural

    def get_format(self):
        return self.__format

    def get_sound_manage(self):
        return self.__sound_manage

    def get_os_config(self):
        return self.__os_config

    def create_buffer(self, frequency_left, frequency_rigth, duration):
        bits = self.__bits_sound
        n_samples = int(round(duration*self.__sample_rate))
        sample_rate = self.__sample_rate

        buf = numpy.zeros((n_samples, 2), dtype = numpy.int16)
        max_sample = 2**(bits - 1) - 1

        for s in range(n_samples):
            t = float(s)/sample_rate

            buf[s][0] = int(round(max_sample*math.sin(2*math.pi*frequency_left*t))) 
            buf[s][1] = int(round(max_sample*0.5*math.sin(2*math.pi*frequency_rigth*t))) 

        return buf

    def save_pure_binaural(self, binaural, path, filename):
        sound = pygame.mixer.Sound(binaural)
        sfile = wave.open(f'{path}/{filename}', 'w')

        sfile.setframerate(self.__sample_rate)
        sfile.setnchannels(self.__channel)
        sfile.setsampwidth(self.__sampwidth)

        sfile.writeframesraw(sound.get_raw())

        sfile.close()

    def steps_for_binaural(self, steps:int, timeSet:array, frequencies, name_sound:str):
        sounds:array = []
        path_binaural:str = self.__path_sounds_binaural
        format:str = self.__format
        frequency_left = [] 
        frequency_right = []

        for frequency in frequencies:
            if("right" in frequency):
                frequency_right.append(frequency["right"])
            else:
                frequency_left.append(frequency["left"])

        for i in range(steps):

            buf = self.create_buffer(frequency_left[i], frequency_right[i], timeSet[i])
            sound = pygame.sndarray.make_sound(buf)

            self.save_pure_binaural(sound, path_binaural, f"{name_sound}{i}.{format}")

            sounds.append(self.__sound_manage.import_sound(path_binaural, f"{name_sound}{i}.{format}"))
            self.__os_config.remove_files_temporary(path_binaural, f"{name_sound}{i}", format)
        
        return sounds 
    
    def call_generate_binaural(self, time, name_sound):
        self.__generate.generate_binaural_sound(time, name_sound, self.__sound_manage)