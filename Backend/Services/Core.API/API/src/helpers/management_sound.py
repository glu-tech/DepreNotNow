from pydub import AudioSegment

class ManagementSound:
    def __init__(self, os_config):
        self.__os_config = os_config

    def export_sound(self, sound, path, filename, format):
        return sound.export(f"{path}/{filename}.{format}", format=format)

    def import_sound(self, path, filename):
        return AudioSegment.from_wav(f"{path}/{filename}")

    def capture_duration_time_sound(self, sound):
        if (sound == None):
            return 0

        return (len(sound))

    def combined_sound(self, sounds):
        if len(sounds) == 0:
            return

        combined = sounds[0]
        del sounds[0]

        for sound in sounds:
            combined += sound

        return combined

    def verify_exist_sound(self, name, path, format):
        sounds_exist = self.__os_config.get_name_files_path(path, format)

        if (len(sounds_exist) > 0):
            for sound_name in sounds_exist:
                name_complete = f"{name}.{format}"
                if (name_complete == sound_name):
                    return True
                else:
                    continue
                
            return False
        else:
            return False