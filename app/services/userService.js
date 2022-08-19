const User = require('../../app/models/user')
class UserService {
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }
}
module.exports = UserService