/**
 * Created by Ayush on 9/16/2016.
 */

/**
 * Created by Ayush on 9/15/2016.
 */

module.exports = function () {
    var mongoose = require("mongoose");

    var WebsiteSchema = mongoose.Schema({
        _user: {type: mongoose.Schema.ObjectId, ref: "User"},
        name: String,
        description: String,
        dateCreated : {type: Date, default: Date.now()}
        },{collection: "assignment.website"});

    return WebsiteSchema;

}
