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


        // var resultSet = [];
        // for(var i in websites){
        //     if(websites[i].developerId === userId){
        //         resultSet.push(websites[i]);
        //     }
        // }
        // res.json(resultSet);
        // return;

    }

    function findWebsiteById(req,res) {
        var id = req.params.websiteId;
        for(var i in websites){
            if(websites[i]._id === id){
                res.send(websites[i]);
                return;
            }
        }
        res.send(400);
        return;

    }
    function updateWebsite(req,res) {
        var websiteId = req.params.websiteId;
        updatedWebsiteContent = req.body;
        for(var i in websites){
            if(websites[i]._id === websiteId){
                websites[i].name = updatedWebsiteContent.name;
                websites[i].description = updatedWebsiteContent.description;
                res.send(200);
                return;
            }
        }
        res.send(400);
        return;

    }
    function deleteWebsite(req,res) {
        var websiteId = req.params.websiteId;
        for(var i in websites){
            if(websites[i]._id === websiteId){
                websites.splice(i,1);
                res.sendStatus(200);
                return true;
            }
        }
        res.sendStatus(400);
        return false;

    }





}
