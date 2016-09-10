/**
 * Created by Ayush on 9/10/2016.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetListController",WidgetListController);

    function WidgetListController($routeParams, WidgetService) {
        var vm = this;
        vm.userId = $routeParams.userId;

        function init() {
            vm.websites = WidgetService.findWebsitesForUserId(vm.userId);
        }
        init();


    }
})();