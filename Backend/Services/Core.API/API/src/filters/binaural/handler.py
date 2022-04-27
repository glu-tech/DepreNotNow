from __future__ import annotations
from abc import ABC, abstractmethod
from typing import Any, Optional

class Handler(ABC):
    @abstractmethod
    def set_next(self, handler: Handler) -> Handler:
        pass

    @abstractmethod
    def handle(self, request) -> Optional[Any]:
        pass