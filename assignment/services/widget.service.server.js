/**
 * 
 */
module.exports = function (app){
    app.get("/api/page/:pageId/widget",findAllWidgetsForPage);
//    app.get("/api/user/:userId/website", findAllWebsitesForUser);
//    app.get("/api/website/:websiteId", findWebsiteById);
//    app.put("/api/website/:websiteId",updateWebsite);
//    app.delete("/api/website/:websiteId",deleteWebsite);

    var widgets = [
                    { "_id": "123", "widgetType": "HEADER", "pageId": "321", "size": 2, "text": "GIZMODO"},
                    { "_id": "234", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
                    { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
                      "url": "http://lorempixel.com/400/200/"},
                    { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
                    { "_id": "567", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
                    { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
                      "url": "https://youtu.be/AM2Ivdi9c4E" },
                    { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
                  ];
    
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

    




}
