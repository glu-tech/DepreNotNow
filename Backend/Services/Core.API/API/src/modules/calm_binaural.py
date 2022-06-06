from models.binaural import Binaural

class CalmBinaural(Binaural):
    def generate_binaural_sound(self, time, name_sound:str):
        frequencies = [
            {"left": 396}, {"left": 392}, {"left": 398.6}, 
            {"right": 387.4}, {"right": 400}, {"right": 390}]

        timeSet =   [(33*time)/100, (33*time)/100, (34*time)/100]

        steps = 3

        sounds = self.steps_for_binaural(steps, timeSet, frequencies, name_sound)

        return self.get_sound_manage().combined_sound(sounds)