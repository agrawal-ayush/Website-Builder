/**
 * Created by Ayush on 9/9/2016.
 */

(function () {
    angular
        .module("WebAppMaker")
        .controller("NewPageController",NewPageController);

    function NewPageController($location, $routeParams, PageService) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.websiteId = $routeParams.websiteId;
        vm.createPage = createPage;

        function createPage(name,description) {
            var newPage = PageService.createPage(name, description, vm.websiteId );
            if(newPage){
                $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page");
            }
            else {
                vm.error = "Unable to create website";
            }
        }
    }
})();
