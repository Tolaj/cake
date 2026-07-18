import React from 'react';
import mqtt from 'mqtt';
import { useState } from 'react';
import { useEffect } from 'react'
import HookMqtt from 'controllers/HookMqtt';
function Esp(props) {

   const [isChecked, setIsChecked] = useState(false);

    const [client, setClient] = useState(null);
    
    const mqttConnect = (host, mqttOption) => {
        setConnectStatus('Connecting');
        setClient(mqtt.connect(host, mqttOption));
    };

 

    useEffect(() => {
        if (client) {
            console.log(client)
            client.on('connect', () => {
            setConnectStatus('Connected');
            });
            client.on('error', (err) => {
            console.error('Connection error: ', err);
            client.end();
            });
            client.on('reconnect', () => {
            setConnectStatus('Reconnecting');
            });
            client.on('message', (topic, message) => {
            const payload = { topic, message: message.toString() };
            setPayload(payload);
            });
        }
    }, [client]);






    return (
        <>
       
            <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Switch Light</span>
            </label>
            <HookMqtt isChecked = {isChecked} />
        </>
    );
}

export default Esp;