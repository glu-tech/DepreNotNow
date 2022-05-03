from flask_restx import Api
from pygame.locals import *
from flask import Flask
from controllers.generate_sound_controller import generate_sound_bp
from controllers.generate_sound_controller import api as sound
from controllers.user_controller import api as user
from startup import Startup

app = Flask(__name__)
app.config["DEBUG"] = True
app.config["use_reloader"] = True
api_prefix_url = "/api/core"

startup = Startup()
startup.start()

app.register_blueprint(generate_sound_bp, url_prefix=f"{api_prefix_url}/sound")

api = Api(app, title='API - DepreNotNow', version='1.0', description='API to generate audio binaural beats to help people with mental problems',prefix=api_prefix_url)
api.add_namespace(user, path=f'/user')
api.add_namespace(sound, path=f'/sound')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)