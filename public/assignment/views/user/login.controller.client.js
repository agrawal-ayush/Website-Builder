(function(){
    angular
        .module("WebAppMaker")
        .controller("LoginController",LoginController);
    
    function LoginController($location, UserService) {
        var vm = this;

        vm.login = function (username, password) {
            var user = UserService.findUserByUsernameAndPassword(username,password);
            if(user){
                $location.url("/user/" + user._id);
            }
            else{
                vm.error = "User not found";
            }
            
        };
    };

    
})();
