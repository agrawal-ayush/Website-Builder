/**
 * Created by Ayush on 9/15/2016.
 */

module.exports = function () {

    var mongoose = require("mongoose");
    var UserSchema = require("./user.schema.server")();
    var User = mongoose.model("User",UserSchema);

    var api = {
        createUser: createUser,
    }
    return api;

    function createUser(user) {
        console.log("user.model.server.create");
        console.log(user);
        User.create(user);
    }
}