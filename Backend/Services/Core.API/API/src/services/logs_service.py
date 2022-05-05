import logging
import os

class LogsService:
    def __init__(self):
        logging.basicConfig(filename=f"{os.path.dirname(os.path.realpath('__file__'))}/logs/logs.log", level=logging.INFO)

    def generate_log_info(self, message):
        logging.info(message)

    def generate_log_error(self, message):
        logging.error(message)
