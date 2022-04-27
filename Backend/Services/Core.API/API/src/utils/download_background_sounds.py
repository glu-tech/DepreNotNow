import os

from pytube import YouTube
from moviepy.editor import *
from utils.configurations_os import ConfigurationsOS
from helpers.management_sound import ManagementSound
from global_enviroment import GlobalEnviroment

class DownloadBackgroundSounds:
    def __init__(self, os_config:ConfigurationsOS, sound_manage:ManagementSound, environment:GlobalEnviroment):
        self.__os_config:ConfigurationsOS = os_config
        self.__sound_manage:ManagementSound = sound_manage
        self.__enviroment:GlobalEnviroment = environment

    def downloadAllMusic(self, soundsTypes):
        print("Starting download sounds...")
        for types in soundsTypes:
            for url in soundsTypes[types]:
                self.downloadMusic(types, url)
        print("Finished downloads!")

    def downloadMusic(self, type, url):
        yt:YouTube = YouTube(url)
        yt.title = f"background_{type}_{yt.length}"
        path = f"{self.__enviroment.get_path_sounds_background()}/{type}"

        if(self.__sound_manage.verify_exist_sound(yt.title, path, "wav") == False):
            ys = yt.streams.filter(only_audio=True)[0]
            print(f"Downloading - {yt.title} for {path} ...")
            ys.download(f"{path}")
            print("Download completed!")
            print(f"Converting - {yt.title}.mp4 for {yt.title}.wav in {path} ...")
            self.convertMp4ToWav(path, yt.title)
            print("Conversion completed!")

    def convertMp4ToWav(self, path, filename):
        video = AudioFileClip(os.path.join(f"{path}/{filename}.mp4"))
        video.write_audiofile(os.path.join(f"{path}/{filename}.wav"))

        self.__os_config.remove_files_temporary(path, filename, "mp4")