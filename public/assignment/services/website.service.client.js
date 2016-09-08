/**
 * Created by Ayush on 9/8/2016.
 */
(function(){
    angular
        .module("WebAppMaker")
        .factory("WebsiteService", WebsiteService);

    var websites = [
        { "_id": "123", "name": "Facebook",    "developerId": "456" },
        { "_id": "234", "name": "Tweeter",     "developerId": "456" },
        { "_id": "456", "name": "Gizmodo",     "developerId": "456" },
        { "_id": "567", "name": "Tic Tac Toe", "developerId": "123" },
        { "_id": "678", "name": "Checkers",    "developerId": "123" },
        { "_id": "789", "name": "Chess",       "developerId": "234" }
    ];

    function WebsiteService() {
        var api = {
            createWebsite: createWebsite,
            findWebsitesForUserId: findWebsitesForUserId
        };
        return api;

        function createWebsite(name, desc,  developerId) {
            var newWebsite = {
                _id: (new Date()).getTime()+"",
                name: name,
                description: desc,
                developerId: developerId
            };
            websites.push(newWebsite);
            return newWebsite;
        }

        function findWebsitesForUserId(userId) {
            var resultSet = [];
            for(var i in websites){
                if(websites[i].developerId === userId){
                    resultSet.push(websites[i]);
                }
            }
            return resultSet;
        };


    };


})();