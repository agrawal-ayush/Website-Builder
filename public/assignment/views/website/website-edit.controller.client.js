/**
 * Created by Ayush on 9/9/2016.
 */


(function () {
    angular
        .module("WebAppMaker")
        .controller("EditWebsiteController",EditWebsiteController);

    function EditWebsiteController($location, $routeParams, WebsiteService) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.websiteId = $routeParams.websiteId;
        vm.deleteWebsite = deleteWebsite;
        vm.updateWebsite = updateWebsite;

        function init() {
            WebsiteService
                .findWebsiteById(vm.websiteId)
                .then(function (response) {
                        vm.website = response.data;
                    },
                    function (error) {
                        vm.error = "Unable to delete website";
                    }
                );

        }
        init();
        
        function updateWebsite(name,description) {
            console.log(description);
            WebsiteService
                .updateWebsite(name,description,vm.websiteId)
                .then(function (response) {
                        $location.url("/user/"+vm.userId+"/website");
                    },
                    function (error) {
                        vm.error = "Unable to delete website";
                    }
                );
        };

        function deleteWebsite(websiteId){
            WebsiteService
                .deleteWebsite(websiteId)
                .then(function (response) {
                        $location.url("/user/"+vm.userId+"/website");
                    },
                    function (error) {
                        vm.error = "Unable to delete website";
                    }
                )
        };
    };
})();