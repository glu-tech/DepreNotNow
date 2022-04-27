from models.binaural import Binaural

class SleepBinaural(Binaural):
    def generate_binaural_sound(self, time, name_sound:str):
        frequencies = [
            {"left": 168}, {"left": 180}, {"left": 177}, 
            {"right": 180}, {"right": 170}, {"right": 169},

            {"left": 174}, {"left": 176}, {"left": 172.6}, 
            {"right": 180}, {"right": 172}, {"right": 176},

            {"left": 175.4}, {"left": 174.7}, {"left": 174.25}, 
            {"right": 173}, {"right": 173.3}, {"right": 173.75}
            ]

        timeSet = [(8*time)/100, (4*time)/100, (4*time)/100, (4*time)/100, (4*time)/100, 
                    (60*time)/100, (4*time)/100, (4*time)/100, (8*time)/100]

        steps = 9

        sounds = self.steps_for_binaural(steps, timeSet, frequencies, name_sound)

        return self.get_sound_manage().combined_sound(sounds)