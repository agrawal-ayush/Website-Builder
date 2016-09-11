/**
 * Created by Ayush on 9/9/2016.
 */

(function () {
    angular
        .module("WebAppMaker")
        .controller("EditPageController",EditPageController);

    function EditPageController($scope, $location, $routeParams, PageService) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.websiteId = $routeParams.websiteId;
        vm.pageId = $routeParams.pageId;
        vm.updatePage = updatePage;
        vm.deletePage = deletePage;

        function init() {
            PageService
                .findPageById(vm.pageId)
                .then(function (response) {
                        vm.page = response.data;
                    },
                    function (error) {
                        vm.error = "Could not retrieve data. Reload again !!!!!!"
                    });
        };

        init();


        function updatePage(name,desciption) {
            PageService
                .updatePage(name,desciption,vm.pageId)
                .then(function (response) {
                        $location.url("/user/"+ vm.userId +"/website/" + vm.websiteId + "/page");
                    },
                    function (error) {
                        vm.error = "Unable to delete website";
                    });
        }

        function deletePage(pageId) {
            PageService
                .deletePage(pageId)
                .then(function (response) {
                        location.href = "#/user/"+ vm.userId +"/website/" + vm.websiteId + "/page";
                    },
                    function (error) {
                        vm.error = "Unable to delete website";
                    });
        }
    }
})();