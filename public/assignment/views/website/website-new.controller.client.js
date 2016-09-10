/**
 * Created by Ayush on 9/9/2016.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("NewWebsiteController",NewWebsiteController);

    function NewWebsiteController($location, $routeParams, WebsiteService) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.createWebsite = createWebsite;

        function createWebsite(name, description) {
            var newWebsite = WebsiteService.createWebsite(name, description, vm.userId);
            if(newWebsite){
                $location.url("/user/"+vm.userId+"/website");
            }
            else {
                vm.error = "Unable to create website";
            }
        }
    }
})();