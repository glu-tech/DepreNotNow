from .options.by_calm import CalmHandler
from .options.by_happy import HappyHandler
from .options.by_sleep import SleepHandler

class HandleSet:
    def set_handle(self):
        calm = CalmHandler()
        happy = HappyHandler()
        sleep = SleepHandler()

        return happy.set_next(sleep).set_next(calm).set_next(happy)