from flask_restx import Api
from pygame.locals import *
from flask import Flask, jsonify, make_response
from controllers.generate_sound_controller import generate_sound_bp
from controllers.user_controller import user_name_bp, user_feeling_bp
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
app.register_blueprint(user_name_bp, url_prefix=f"{api_prefix_url}/user")
app.register_blueprint(user_feeling_bp, url_prefix=f"{api_prefix_url}/user")

api = Api(app, title='API - DepreNotNow', version='1.0', description='API to generate audio binaural beats to help people with mental problems',prefix=api_prefix_url)
api.add_namespace(user, path=f'/user')
api.add_namespace(sound, path=f'/sound')

@app.errorhandler(404)
def not_found(e): 
    return make_response(jsonify({"message": e.description, "title": e.name, "status_code": 404}), 404)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)