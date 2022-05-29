To run the system, a local MQTT broker needs to be set up. This project uses Mosquitto. A text file containing the username and password in the format, testuser:testpass, needs to be created and placed with the other Mosquitto files.
A default Mosquitto config file will have been created, edit the file to contain the following:
#    `listener 1884`
#    `protocol websockets` 
#    `allow_anonymous false` 
#    `password_file *username and password file path*`

To start the broker, navigate to the directory of Mosquitto in a terminal and use the: 
### `mosquitto -v -c mosquitto.conf`



In the project directory, you can run:

### `npm install`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

