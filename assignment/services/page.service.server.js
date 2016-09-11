/**
 * Created by Ayush on 9/11/2016.
 */

module.exports = function (app){
    app.post("/api/website/:websiteId/page", createPage);
    app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
    app.get("/api/page/:pageId", findPageById);
    app.put("/api/page/:pageId", updatePage);
    app.delete("/api/page/:pageId", deletePage);

    var pages = [
        { "_id": "321", "name": "Post 1", "description": "Simple Website Post 1", "websiteId": "456" },
        { "_id": "432", "name": "Post 2", "description": "Simple Website Post 2", "websiteId": "456" },
        { "_id": "543", "name": "Post 3", "description": "Simple Website Post 3", "websiteId": "456" },
        { "_id": "205", "name": "Post 1", "description": "Simple Website Post 4", "websiteId": "789" }

    ];

    function createPage(req,res) {
        var newPage = req.body;
        newPage._id = (new Date()).getTime()+"";
        pages.push(newPage);
        res.send(newPage);
        return newPage;

    }
    function findAllPagesForWebsite(req,res) {
        var websiteId = req.params.websiteId;
        var resultSet = [];
        for(var i in pages){
            if(pages[i].websiteId === websiteId){
                resultSet.push(pages[i]);
            }
        }
        res.json(resultSet);
        return;

    }

    function findPageById(req,res) {
        var id = req.params.pageId;
        for(var i in pages){
            if(pages[i]._id === id){
                res.send(pages[i]);
                return;
            }
        }
        res.send(400);
        return;

    }
    function updatePage(req,res) {
        var pageId = req.params.pageId;
        updatedPageContent = req.body;
        for(var i in pages){
            if(pages[i]._id === pageId){
                pages[i].name = updatedPageContent.name;
                pages[i].description = updatedPageContent.description;
                res.send(200);
                return;
            }
        }
        res.send(400);
        return;

    }
    function deletePage(req,res) {
        var pageId = req.params.pageId;
        for(var i in pages){
            if(pages[i]._id === pageId){
                pages.splice(i,1);
                res.sendStatus(200);
                return true;
            }
        }
        res.sendStatus(400);
        return false;
    }





}
