const { v4: uuidv4 } = require('uuid')

class AuthResource {
    setup(app) {
        app.post('/api/auth', this.authenticate)
    }

    authenticate(req, res) {
        const { username } = req.body
        const user = { username, id: uuidv4() }
        console.log('User Logged: ', user)
        res.json(user)
    }
}

module.exports = AuthResource
