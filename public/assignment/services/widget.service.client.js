/**
 * Created by Ayush on 9/10/2016.
 */

(function () {
    angular
        .module("WebAppMaker")
        .factory("WidgetService", WidgetService);

    function WidgetService($http) {
        var api = {
            findWidgetsForPageId: findWidgetsForPageId,
        };
        return api;

        function findWidgetsForPageId(pageId) {
            return $http.get("/api/page/"+pageId+"/widget");
        };


    };


})();
