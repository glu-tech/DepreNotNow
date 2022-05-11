import json
from ..app import app

def test_generate_sound_endpoint():
    response = app.test_client().post('/api/core/sound/generate/', data=json.dumps({
                                        'typeBinaural': 'calm',
                                        'typeBackground': 'safe_rock',
                                        'time': 10
                                    }), content_type='application/json')

    assert response.status_code == 200