/**
 * Created by Ayush on 9/16/2016.
 */

module.exports = function () {

    var mongoose = require("mongoose");
    var WebsiteSchema = require("./website.schema.server.js")();
    var Website = mongoose.model("Website", WebsiteSchema);

    var api = {
        createWebsite: createWebsite,
        findAllWebsitesForUser: findAllWebsitesForUser,
        findWebsiteById: findWebsiteById,
        updateWebsite: updateWebsite,
        deleteWebsite: deleteWebsite

    }
    return api;

    function updateWebsite(websiteId,newWebsite) {
        delete newWebsite._id;
        return Website.update({_id : websiteId},{
            $set : {
                name: newWebsite.name,
                description: newWebsite.description
            }
        })
    }

    function deleteWebsite(websiteId) {
        return Website.remove({_id: websiteId});
    }

    function findWebsiteById(websiteId) {
        return Website.findOne({_id: websiteId});
    }

    function createWebsite(userId,newWebsite) {
        newWebsite._user = userId;
        return Website.create(newWebsite);
    }

    function findAllWebsitesForUser(userId) {
        return Website.find({"_user": userId});

    }
}