# ESP32S3-BOX with BME680 sensor and MQTT publish in DeviceScript

Simple DeviceScript program that lets you measure temperature, humidity, pressure with BME680 sensor and send the data via MQTT to a (public) broker. 

The board configuration is for ESP32S3-BOX, if you wanna use different board, a new .board.json file has to be added to /boards/ directory for the respective device.

# Usage

Node.js 16+ must be installed first as well as the DeviceScript VSCode extension from Microsoft DevLabs. I recommend reading the [tutorial](https://microsoft.github.io/devicescript/getting-started/vscode) for setting up DeviceScript.

Clone this project, connect your ESP32S3-BOX (or any other device, but you need to switch to/create the respective board config) and Navigate to Devices/Flash Firmware... (CMD + Shift + P and >DeviceScript:Flash Firmware...).

After successful flash, click Connect Device button in Devices tab (or >DeviceScript:Connect...)

Finally, run your DeviceScript code by being on main.ts after connecting, click on the "Run Code" icon dropdown arrow and choose "DeviceScript: Run"

You can then hop on [HiveMQ public MQTT broker](https://www.hivemq.com/demos/websocket-client/), subscribe to chosen topics (Temperature, Humidity, Pressure) and watch the data come in.

So far, this doesn't work with other MQTT brokers that need some certificate authentication over TLS (AWS IoT Core). 

# COMING SOON/WIP

* display initialization on ESP32S3-BOX, display the sensor data (WIP)
* sending data via MQTT over TLS to AWS IoT Core

This project uses [DeviceScript](https://microsoft.github.io/devicescript/).

