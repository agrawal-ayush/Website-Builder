/**
 * Created by Ayush on 9/11/2016.
 */

/**
 * Created by Ayush on 9/11/2016.
 */

module.exports = function (app){
    app.post("/api/website/:websiteId/Page",createPage);
    app.get("/api/website/:websiteId/Page", findAllPagesForUser);
    app.get("/api/page/:pageId", findPageById);
    app.put("/api/page/:pageId",updatePage);
    app.delete("/api/page/:pageId",deletePage);




    function createPage(req,res) {
        var newPage = req.body;
        newPage._id = (new Date()).getTime()+"";
        Pages.push(newPage);
        res.send(newPage);
        return newPage;

    }
    function findAllPagesForUser(req,res) {
        var userId = req.params.userId;
        var resultSet = [];
        for(var i in Pages){
            if(Pages[i].developerId === userId){
                resultSet.push(Pages[i]);
            }
        }
        res.json(resultSet);
        return;

    }

    function findPageById(req,res) {
        var id = req.params.PageId;
        for(var i in Pages){
            if(Pages[i]._id === id){
                res.send(Pages[i]);
                return;
            }
        }
        res.send(400);
        return;

    }
    function updatePage(req,res) {
        var PageId = req.params.PageId;
        updatedPageContent = req.body;
        for(var i in Pages){
            if(Pages[i]._id === PageId){
                Pages[i].name = updatedPageContent.name;
                Pages[i].description = updatedPageContent.description;
                res.send(200);
                return;
            }
        }
        res.send(400);
        return;

    }
    function deletePage(req,res) {
        var PageId = req.params.PageId;
        for(var i in Pages){
            if(Pages[i]._id === PageId){
                Pages.splice(i,1);
                res.sendStatus(200);
                return true;
            }
        }
        res.sendStatus(400);
        return false;

    }





}
