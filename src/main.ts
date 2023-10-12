import { startBME680 } from "@devicescript/drivers"
import { startMQTTClient } from "@devicescript/net"
import { Wifi } from "@devicescript/core"

const wifi = new Wifi()

// set SSID and PASSWORD
await wifi.addNetwork("SSID", "PASSWORD")

const { temperature, humidity, pressure, airQualityIndex } = await startBME680({
    address: 0x76,
})

const mqtt = await startMQTTClient({
    host: "broker.hivemq.com",
    proto: "tls",
    port: 8883,
})

setInterval(async () => {
    const temp = await temperature.reading.read()
    const humi = await humidity.reading.read()
    const press = await pressure.reading.read()
    const aqi = await airQualityIndex.reading.read()

    console.log(temp, humi, press, aqi)

    await mqtt.publish("Temperature", temp + '')
    await mqtt.publish("Humidity", humi + '')
    await mqtt.publish("Pressure", press + '')
}, 10000)