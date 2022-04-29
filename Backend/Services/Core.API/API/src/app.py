from pygame.locals import *
from flask import Flask
from controllers.generate_sound_controller import generate_sound_bp
from startup import Startup

app = Flask(__name__)
app.config["DEBUG"] = True
app.config["use_reloader"] = True
api_prefix_url = "/core/api"

startup = Startup()
startup.start()

app.register_blueprint(generate_sound_bp, url_prefix=f"{api_prefix_url}/sound")

# if __name__ == '__main__':
#     app.run(host='0.0.0.0', port=5000)
app.run()