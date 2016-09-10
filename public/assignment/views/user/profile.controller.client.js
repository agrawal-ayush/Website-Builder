(function(){
    angular
        .module("WebAppMaker")
        .controller("ProfileController",ProfileController);

    function ProfileController($routeParams,UserService) {
        var vm = this;
        var id = $routeParams.id;
        vm.updateUser = updateUser;

        function init(){
            UserService
                .findUserById(id)
                .then(function (response) {
                    vm.user = response.data;
                })

        }
        init();

        function updateUser(newUser){
            UserService
                .updateUser(id, newUser)
                .then(
                    function (response) {
                        vm.success = "Update Successfully";
                    },
                    function (error) {
                        vm.error = "Unable to update user";
                    })
        }
        

    };
})();
