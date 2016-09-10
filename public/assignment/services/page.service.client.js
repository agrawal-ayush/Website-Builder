/**
 * Created by Ayush on 9/8/2016.
 */
(function(){
    angular
        .module("WebAppMaker")
        .factory("PageService", PageService);

    var pages = [
        { "_id": "321", "name": "Post 1", "description": "Simple Website Post 1", "websiteId": "456" },
        { "_id": "432", "name": "Post 2", "description": "Simple Website Post 2", "websiteId": "456" },
        { "_id": "543", "name": "Post 3", "description": "Simple Website Post 3", "websiteId": "456" },
        { "_id": "205", "name": "Post 1", "description": "Simple Website Post 4", "websiteId": "789" }

    ];

    function PageService() {
        var api = {
            createPage: createPage,
            findPagesForWebsiteId: findPagesForWebsiteId,
            findPageById: findPageById,
            updatePage: updatePage,
            deletePage: deletePage
        };
        return api;

        function createPage(name, desc,  websiteId) {
            var newPage = {
                _id: (new Date()).getTime()+"",
                name: name,
                description: desc,
                websiteId: websiteId
            };
            pages.push(newPage);

            return newPage;

        };

        function findPagesForWebsiteId(websiteId) {
            var resultSet = [];
            for(var i in pages){
                if(pages[i].websiteId === websiteId){
                    resultSet.push(pages[i]);
                }
            }
            return resultSet;
        };

        function findPageById(pageId) {
            for(var i in pages){
                if(pages[i]._id === pageId){
                    return pages[i];
                }
            }
        };

        function updatePage(name,desciption, pageId) {
            for(var i in pages){
                if(pages[i]._id === pageId){
                    pages[i].name = name;
                    pages[i].description = desciption;
                    return true;
                }
            }
            return false;
        }

        function deletePage(pageId) {
            for(var i in pages){
                if(pages[i]._id === pageId){
                    pages.splice(i,1);
                    return true;
                }
            }
            return false;
        }
    };


})();
