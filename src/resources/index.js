const AuthResource = require('./AuthResource')
const UserResource = require('./UserResource')

class Resources {
    setup(app) {
        new AuthResource().setup(app)
        new UserResource().setup()
    }
}

module.exports = new Resources()
