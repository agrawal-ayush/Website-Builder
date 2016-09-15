/**
 * Created by Ayush on 9/16/2016.
 */

module.exports = function () {

    var mongoose = require("mongoose");
    var WebsiteSchema = require("./website.schema.server.js")();
    var Website = mongoose.model("Website", WebsiteSchema);

    var api = {
        findAllWebsitesForUser: findAllWebsitesForUser,
        createWebsite: createWebsite

    }
    return api;

    function createWebsite(userId,newWebsite) {
        newWebsite._user = userId;
        return Website.create(newWebsite);
    }

    function findAllWebsitesForUser(userId) {
        return Website.find({"_user": userId});

    }
}