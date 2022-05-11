from typing import Any
from ....enums.binaural_types import BinauralTypes
from ..abstract_handler import AbstractHandler
from ....models.request_handle_model import RequestHandleModel
from ....modules.sleep_binaural import SleepBinaural

class SleepHandler(AbstractHandler):
    def handle(self, request: RequestHandleModel) -> Any:
        if request.get_type() == BinauralTypes.sleep.name:
            binaural = request.get_binaural()
            return SleepBinaural(binaural.get_bits_sound(), binaural.get_sample_rate(),
                    binaural.get_channel(), binaural.get_sampwidth(), binaural.get_path_sounds_binaural(),
                    binaural.get_format(), binaural.get_sound_manage(), binaural.get_os_config()).generate_binaural_sound(
                request.get_time(), 
                request.get_name_sound())
        else:
            return super().handle(request)