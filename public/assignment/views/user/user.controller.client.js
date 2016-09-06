/**
 * Created by Ayush on 9/5/2016.
 */

(function(){
    angular
        .module("WebAppMaker")
        .controller("LoginController",LoginController)
        .controller("ProfileController",ProfileController);

    
    function LoginController($location) {
        var vm = this;

        var users = [
        { _id: "123",username: "alice", password: "alice"},
        { _id: "234",username: "bob", password: "bob"},
        { _id: "345",username: "charly", password: "charly"},
        { _id: "456",username: "jannunzi", password: "jannunzi"}
        ];


        vm.login = function (username, password) {
            for(var i in users){
                if(users[i].username === username && users[i].password === password){
                    $location.url("/profile/" + users[i]._id);
                }
                else {
                    vm.error = "User not found";
                }
            }
        };
    };

    function ProfileController($routeParams) {
        var vm = this;
        vm.updateUser = updateUser;

        function updateUser(newUser) {
            users[index].firstName = newUser.firstName;

        }



    };
})();
