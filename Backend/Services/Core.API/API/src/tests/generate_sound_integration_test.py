import json
from datetime import datetime
from re import search
from app import app

def test_generate_sound_endpoint():
    type_binaural = "calm"
    type_background = "safe_rock"
    time = 300
    response = app.test_client().post('/api/core/sound/generate/', data=json.dumps({
                                        'typeBinaural': type_binaural,
                                        'typeBackground': type_background,
                                        'time': time
                                    }), content_type='application/json')

    assert response.status_code == 201
    assert response.json["has_error"] == False
    assert search(str(time), response.json["url_sound"])
    assert search(type_binaural, response.json["url_sound"])
    assert search(type_background, response.json["url_sound"])
    
def test_generate_sound_endpoint_without_set_time():
    type_binaural = "calm"
    type_background = "safe_rock"
    response = app.test_client().post('/api/core/sound/generate/', data=json.dumps({
                                        'typeBinaural': type_binaural,
                                        'typeBackground': type_background
                                    }), content_type='application/json')

    print(response.json)
    assert response.status_code == 404
    assert response.json["has_error"] == True
    assert len(response.json['errors']) > 0
