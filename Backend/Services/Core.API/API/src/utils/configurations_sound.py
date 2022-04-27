from pydub import AudioSegment

class ConfigurationsSounds:
    def control_volume(self, operator, amount, sound):
        if(operator == '+'):
            return sound + amount
        elif(operator == '-'):
            return sound - amount

    def overlay_of_sound(self, binaural, background):
        return background.overlay(binaural, position=0)

    def cut_sound(self, time, sound:AudioSegment):
        time_result = sound.duration_seconds * 1000 - time
        return sound[:time_result]

    def configuration_sounds_final(self, binaural, background):
        louder_for_binaural = self.control_volume('-', 8, binaural)
        overlay_for_background = self.overlay_of_sound(louder_for_binaural, background)

        return overlay_for_background
