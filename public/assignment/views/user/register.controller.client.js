/**
 * Created by Ayush on 9/11/2016.
 */

(function (){
    angular
        .module("WebAppMaker")
        .controller("RegisterController",RegisterController);
    
    function RegisterController($location,UserService) {
        var vm = this;
        vm.register = register;
        
        function register(username,password,password2) {
            console.log("Hi from register controller");
            UserService
                .createUser(username, password)
                .then(function (response) {
                    var user = response.data;
                    if(user){
                        $location.url("/user/"+user._id);
                    }
                });
        }
    }
})();
