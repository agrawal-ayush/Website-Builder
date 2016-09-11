/**
 * Created by Ayush on 9/9/2016.
 */


(function () {
    angular
        .module("WebAppMaker")
        .controller("PageListController",PageListController);

    function PageListController($routeParams, PageService) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.websiteId = $routeParams.websiteId;

        function init() {
            PageService
                .findPagesForWebsiteId(vm.websiteId)
                .then(function (response) {
                    vm.pages = response.data;
                },
                function (error) {
                    vm.error = "Could not retrieve all the pages. Reload again !!!!!!"
                });

        }
        init();
    }
})();

