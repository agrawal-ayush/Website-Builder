/**
 * Created by Ayush on 9/8/2016.
 */
(function(){
    angular
        .module("WebAppMaker")
        .factory("PageService", PageService);



    function PageService($http) {
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
            return $http.post("/api/website/"+websiteId+"/page",newPage);
        };

        function findPagesForWebsiteId(websiteId) {
            return $http.get("/api/website/"+websiteId+"/page");
        };

        function findPageById(pageId) {
            return $http.get("/api/page/"+pageId);
        };

        function updatePage(name,description, pageId) {
            var newPage = {
                name: name,
                description: description
            };
            return $http.put("/api/page/"+pageId, newPage);
        }

        function deletePage(pageId) {
            return $http.delete("/api/page/"+pageId);
        }
    };


})();
