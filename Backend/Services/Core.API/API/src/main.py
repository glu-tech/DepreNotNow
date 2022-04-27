from datetime import datetime
from pygame.locals import *
from enums.background_types import BackgroundTypes
from enums.binaural_types import BinauralTypes
from models.generate_sound_model import GenerateSoundModel
from startup import Startup

startup = Startup()
enviroment = startup.get_enviroment()
os_config = startup.get_os_config()
sound_config = startup.get_sound_config()
sound_manage = startup.get_sound_manage()
background = startup.get_background()
binaural = startup.get_binaural()
generate_binaural = startup.get_generate_binaural()

def main():
    model = GenerateSoundModel(BinauralTypes.sleep.name, BackgroundTypes.safe_rock.name, 300)
    startup.start()
    enviroment.set_duration(model.get_time())

    format = enviroment.get_format()
    time = enviroment.get_duration()
    name_sound_binaural:str = f"binaural_{model.get_binaural_type()}_{time}"
    date = datetime.now().date().isoformat()
    background.set_type(model.get_background_type())

    if(sound_manage.verify_exist_sound(name_sound_binaural, enviroment.get_path_sounds_binaural(), format) == False):
        create_sound_binaural(name_sound_binaural, time, enviroment.get_path_sounds_binaural(), format)

    sound_binaural_load = sound_manage.import_sound(enviroment.get_path_sounds_binaural(), f"{name_sound_binaural}.{format}")
    sound_background_load = load_sound_background(time, f"{enviroment.get_path_sounds_background()}/{model.get_background_type()}", format)

    merge_sound(sound_binaural_load, sound_background_load, model.get_binaural_type(), model.get_background_type(), time, date, enviroment.get_path_sounds_merge(), format)

    enviroment.exit_pygame()

def create_sound_binaural(name_sound, time, path, format):
    sound = generate_binaural.generate_binaural_sound(time, name_sound, binaural)

    if(sound != None):
        sound_manage.export_sound(sound, path, name_sound, format)

def load_sound_background(time, path, format):
    sound_background_filenames = os_config.get_name_files_path(path, format)
    return background.select_background_sounds(sound_background_filenames, time)

def merge_sound(binaural, background, type_binaural, type_background, time, date, path, format):
    sound = sound_config.configuration_sounds_final(binaural, background)
    sound_manage.export_sound(sound, path, f"sound_{type_binaural}_{type_background}_{time}_{date}", format)

main()