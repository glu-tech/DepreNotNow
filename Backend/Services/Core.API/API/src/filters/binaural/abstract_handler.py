from abc import abstractmethod
from typing import Any
from filters.binaural.handler import Handler
from models.request_handle_model import RequestHandleModel

class AbstractHandler(Handler):
    _next_handler: Handler = None

    def set_next(self, handler: Handler) -> Handler:
        self._next_handler = handler
        return handler

    @abstractmethod
    def handle(self, request: RequestHandleModel) -> Any:
        if self._next_handler:
            return self._next_handler.handle(request)

        return None