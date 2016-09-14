/**
 * Created by Ayush on 9/11/2016.
 */

module.exports = function (app) {
    app.post("/api/page/:pageId/widget", createWidget);
    app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
    app.get("/api/widget/:widgetId", findWidgetById);
    app.put("/api/widget/:widgetId", updateWidget);
    app.delete("/api/widget/:widgetId", deleteWidget);
    // app.post("/api/uploads​",upload​.single("myFile"​),uploadImage​);

    var widgets = [
        {"_id": "123", "widgetType": "HEADER", "pageId": "321", "size": 2, "text": "GIZMODO"},
        {"_id": "234", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
        {"_id": "345", "widgetType": "IMAGE",  "pageId": "321", "width": "100%", "url": "http://lorempixel.com/400/200/"},
        {"_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
        {"_id": "567", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
        {"_id": "678", "widgetType": "YOUTUBE","pageId": "321", "width": "100%", "url": "https://youtu.be/AM2Ivdi9c4E"},
        {"_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
    ];

    // function  uploadImage​(req, res) {
    //     var widgetId      = req.body. widgetId​;
    //     var width         = req.body. width​;
    //     var myFile        = req.file;
    //     var originalname  = myFile.originalname; // file name on user's computer
    //     var filename      = myFile.filename;     // new file name in upload folder
    //     var path          = myFile.path;         // full path of uploaded file
    //     var destination   = myFile.destination;  // folder where file is saved to
    //     var size          = myFile.size;
    //     var mimetype      = myFile.mimetype;
    //
    //     res.send(200);
    // }


    function createWidget(req, res) {
        var newWidget = req.body;
        newWidget._id = (new Date()).getTime() + "";
        widgets.push(newWidget);
        res.send(newWidget);
        return newWidget;

    }

    function findAllWidgetsForPage(req,res){
        var resultSet = [];
        var pageId = req.params.pageId;
        for(var i in widgets){
            if(widgets[i].pageId === pageId){
                resultSet.push(widgets[i]);
            }
        }

        return res.send(resultSet);
    };

    function findWidgetById(req, res) {
        var id = req.params.pageId;
        for (var i in widgets) {
            if (widgets[i]._id === id) {
                res.send(widgets[i]);
                return;
            }
        }
        res.send(400);
        return;

    };

    function updateWidget(req, res) {
        var pageId = req.params.pageId;
        updatedWidgetContent = req.body;
        for (var i in widgets) {
            if (widgets[i]._id === pageId) {
                widgets[i].name = updatedWidgetContent.name;
                widgets[i].description = updatedWidgetContent.description;
                res.send(200);
                return;
            }
        }
        res.send(400);
        return;
    };
    function deleteWidget(req, res) {
        var pageId = req.params.pageId;
        for (var i in widgets) {
            if (widgets[i]._id === pageId) {
                widgets.splice(i, 1);
                res.sendStatus(200);
                return true;
            }
        }
        res.sendStatus(400);
        return false;
    };
}

