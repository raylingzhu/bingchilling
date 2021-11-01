const WebSocket = require("ws");
//wassup
const por = process.env.PORT || 8082 

const wss = new WebSocket.Server({port:por});

wss.on('connection', ws => {
    console.log("connection established");



    ws.on(close, () => {
        console.log("a client has disconnected");
    })
} );