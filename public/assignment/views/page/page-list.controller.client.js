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
        console.log(vm.userId);
        console.log(vm.websiteId);

        function init() {
            vm.pages = PageService.findPagesForWebsiteId(vm.websiteId);
        }
        init();
    }
})();

