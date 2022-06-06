from filters.binaural.options.by_calm import CalmHandler
from filters.binaural.options.by_happy import HappyHandler
from filters.binaural.options.by_sleep import SleepHandler

class HandleSet:
    def set_handle(self):
        calm = CalmHandler()
        happy = HappyHandler()
        sleep = SleepHandler()

        return happy.set_next(sleep).set_next(calm).set_next(happy)