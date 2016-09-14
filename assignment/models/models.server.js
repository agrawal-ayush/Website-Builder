/**
 * Created by Ayush on 9/15/2016.
 */

module.exports = function () {

    var mongoose = require("mongoose");
    mongoose.connect("mongodb://localhost/websiteBuider");

    var models = {
        userModel: require("./user/user.model.server.js")()
        //TODO Add other models
    };

    return models;

}
