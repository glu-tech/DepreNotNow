from datetime import datetime
import json

from re import search
from ..app import app

def test_generate_sound_endpoint():
    type_binaural = "calm"
    type_background = "safe_rock"
    time = 10
    response = app.test_client().post('/api/core/sound/generate/', data=json.dumps({
                                        'typeBinaural': type_binaural,
                                        'typeBackground': type_background,
                                        'time': time
                                    }), content_type='application/json')

    assert response.status_code == 200
    assert response.json["has_error"] == False
    assert search(datetime.now().date().isoformat(), response.json["url_sound"])
    assert search(str(time), response.json["url_sound"])
    assert search(type_binaural, response.json["url_sound"])
    assert search(type_background, response.json["url_sound"])