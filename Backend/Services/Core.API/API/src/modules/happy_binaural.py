from ..models.binaural import Binaural

class HappyBinaural(Binaural):
    def generate_binaural_sound(self, time, name_sound:str):
        frequencies = [
            {"left": 401}, {"left": 388}, 
            {"right": 393}, {"right": 400}]

        timeSet = [(42.86*time)/100, (57.14*time)/100]

        steps = 2

        sounds = self.steps_for_binaural(steps, timeSet, frequencies, name_sound)

        return self.get_sound_manage().combined_sound(sounds)