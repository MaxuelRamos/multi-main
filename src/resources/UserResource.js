const { WebSocketServer } = require('ws')
const { parse } = require('url')
// const server = require('../server')

const connection = 'connection'
const message = 'message'

class UserResource {
    constructor() {
        this.clients = new Map()
    }

    setup() {
        const wss = new WebSocketServer({ port: 8080 })

        wss.on(connection, (ws, req) => this.onConnect(ws, req))
    }

    onConnect(ws, req) {
        const { pathname } = parse(req.url)

        const id = String(pathname).substring(1)
        this.clients.set(id, ws)

        ws.on(message, (data) => this.onMessage(ws, id, data))

        ws.on('close', () => this.onClose(id))

        console.log(`Connected: ${id}`)
    }

    onMessage(ws, id, data) {
        console.log('received: %s', data)
        ws.send(String(data))
    }

    onClose(id) {
        console.log(`Disconnected: ${id}`)
        this.clients.delete(id)
    }
}

module.exports = UserResource
