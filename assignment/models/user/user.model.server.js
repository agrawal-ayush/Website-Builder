/**
 * Created by Ayush on 9/15/2016.
 */

module.exports = function () {

    var mongoose = require("mongoose");
    var UserSchema = require("./user.schema.server")();
    var User = mongoose.model("User",UserSchema);

    var api = {
        createUser: createUser,
        findUserById: findUserById,
        findUserByCredentials: findUserByCredentials,
        updateUser: updateUser,
        deleteUser: deleteUser
    }
    return api;

    function updateUser(userId,user) {
        delete user._id;
        return User
            .update({_id: userId},{
                $set: {
                    firstName: user.firstName,
                    lastName: user.lastName
                }
            });
    }

    function deleteUser(UserId) {
        return User.remove({_id: UserId});
    }
    function findUserByCredentials(username, password) {
        return User.findOne({username : username, password: password});
    }

    function findUserById(userId) {
        return User.findOne({_id : userId});
    }

    function createUser(user) {
        return User.create(user);
    }
}