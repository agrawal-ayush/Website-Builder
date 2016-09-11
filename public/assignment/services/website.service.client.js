/**
 * Created by Ayush on 9/8/2016.
 */
(function(){
    angular
        .module("WebAppMaker")
        .factory("WebsiteService", WebsiteService);

    function WebsiteService($http) {
        var api = {
            createWebsite: createWebsite,
            findAllWebsitesForUser:findAllWebsitesForUser,
            findWebsiteById: findWebsiteById,
            updateWebsite:updateWebsite,
            deleteWebsite: deleteWebsite
        };
        return api;
        
        function findAllWebsitesForUser(userId) {
            return $http.get("/api/user/"+userId+"/website");
        }
        function updateWebsite(name,description,websiteId) {
            var newWebsite = {
                name: name,
                description: description
            };
            return $http.put("/api/website/"+websiteId, newWebsite);
        }
        function createWebsite(name, desc,  developerId) {
            var newWebsite = {
                name: name,
                description: desc,
                developerId: developerId
            }
            return $http.post("/api/user/"+developerId+"/website",newWebsite);
        };

        function findWebsiteById(websiteId) {
            return $http.get("/api/website/"+websiteId);
        };

        function deleteWebsite(websiteId){
            return $http.delete("/api/website/"+websiteId);
        };
    };
})();