/**
 * Created by Ayush on 9/15/2016.
 */

module.exports = function () {
    var mongoose = require("mongoose");

    var UserSchema = mongoose.Schema({
        username : {
            type: String,
            required : true
        },
        password : String,
        firstName : String,
        lastName : String,
        dob : Date,
        dateCreated : {
            type : Date,
            default : Date.now()
        }
    },{collection: "assignment.user"});

    return UserSchema;

}
