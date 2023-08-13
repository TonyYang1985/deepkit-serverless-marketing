import { LoggerInterface } from "@deepkit/logger";
import MqttConfig from "../config/mqtt.json";
import mqtt from 'mqtt';
import { nanoid } from "nanoid";
import _ from "lodash";

export class MqttService {
    
    constructor(protected logger: LoggerInterface) {
        const client = mqtt.connect(MqttConfig.url, _.assign({},MqttConfig.options,{clientId: nanoid(4)} ))

        client.on('connect', function () {
            client.subscribe(MqttConfig.subscribe, function (err) {
                if (!err) {
                    logger.error('MQTT Connected Error', err)
                } else {
                    logger.log('MQTT Connected')
                }

            })
        })
        client.on('message', function (topic, message) {
            logger.log(message.toString())
        })

    }

}