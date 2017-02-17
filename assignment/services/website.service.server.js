/**
 * Created by Ayush on 9/11/2016.
 */


module.exports = function (app, models){

    var websiteModel = models.websiteModel;

    app.post("/api/user/:userId/website",createWebsite);
    app.get("/api/user/:userId/website", findAllWebsitesForUser);
    app.get("/api/website/:websiteId", findWebsiteById);
    app.put("/api/website/:websiteId",updateWebsite);
    app.delete("/api/website/:websiteId",deleteWebsite);

    var websites = [
        { "_id": "123", "name": "Facebook",  description:"jnknk",  "developerId": "456" },
        { "_id": "234", "name": "Tweeter",   description:"",   "developerId": "456" },
        { "_id": "456", "name": "Gizmodo",  description:"",    "developerId": "456" },
        { "_id": "567", "name": "Tic Tac Toe", description:"", "developerId": "123" },
        { "_id": "678", "name": "Checkers",  description:"",   "developerId": "123" },
        { "_id": "789", "name": "Chess",    description:"njkjknk",    "developerId": "234" }
    ];

    function createWebsite(req,res) {
        var userId = req.params.userId;
        var newWebsite = req.body;
        websiteModel
            .createWebsite(userId,newWebsite)
            .then(
                function (website) {
                    res.json(website)
                },
                function (error) {
                    res.statusCode(400).send(error);
                }
            )

    }
    function findAllWebsitesForUser(req,res) {
        var userId = req.params.userId;

        websiteModel
            .findAllWebsitesForUser(userId)
            .then(
                function (websites) {
                    res.json(websites);
                },
                function (error) {
                    res.statusCode(404).send(error);
                }
            )


    }

    function findWebsiteById(req,res) {
        var id = req.params.websiteId;

        websiteModel
            .findWebsiteById(id)
            .then(
                function (website) {
                    res.json(website);
                },
                function (error) {
                    res.statusCode(404).send(error);
                }
            )


    }
    function updateWebsite(req,res) {
        var websiteId = req.params.websiteId;
        newWebsite = req.body;
        websiteModel
            .updateWebsite(websiteId,newWebsite)
            .then(
                function (stats) {
                    res.send(200);
                },
                function (error) {
                    res.statusCode(404).send(error);
                }
            )

    }
    function deleteWebsite(req,res) {
        var websiteId = req.params.websiteId;
        websiteModel
            .deleteWebsite(websiteId)
            .then(function (stats) {
                    res.send(200);
                },
                function (error) {
                    res.send(404);
                })


    }





}
