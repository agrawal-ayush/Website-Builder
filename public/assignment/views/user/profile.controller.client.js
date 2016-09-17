(function(){
    angular
        .module("WebAppMaker")
        .controller("ProfileController",ProfileController);

    function ProfileController($location,$routeParams,UserService) {
        var vm = this;
        var id = $routeParams.id;
        vm.updateUser = updateUser;
        vm.unregister = unregister;
        vm.logout = logout;
        
        function logout() {
            UserService
                .logout()
                .then(
                    function (response) {
                        $location.url("/login");
                    },
                    function () {
                        $location.url("/login");
                    }
                )
        }

        function init(){
            UserService
                .findUserById(id)
                .then(function (response) {
                    vm.user = response.data;
                })

        }
        init();
        
        function unregister() {
            UserService
                .deleteUser(id)
                .then(function() {
                    $location.url("/login");
                },
                function () {
                    vm.error = "Unable to delete your profile";
                })


        }

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
