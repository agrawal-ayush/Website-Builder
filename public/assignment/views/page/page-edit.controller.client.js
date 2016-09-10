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
            vm.page = PageService.findPageById(vm.pageId);
            if(vm.page){
                vm.success = "Results returned";
            }
            else{
                vm.error = "Unable to retrieve information";
            }
        };
        init();

        
        function updatePage(name,desciption) {
            var result = PageService.updatePage(name,desciption,vm.pageId);
            if(result){
                // location.href = "/user/"+ vm.userId +"/website/" + vm.websiteId + "/page";
                $location.url("/user/"+ vm.userId +"/website/" + vm.websiteId + "/page");
                vm.success = "Updated Successfully";
            }
            else{
                vm.error = "Unable to delete website";
            }
        }

        function deletePage(pageId) {
            var result = PageService.deletePage(pageId);
            if (result) {
                location.href = "#/user/"+ vm.userId +"/website/" + vm.websiteId + "/page";
                // $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page");
            }
            else {
                vm.error = "Unable to delete website";
            }
        }
    }
})();