/**
 * Created by Ayush on 9/5/2016.
 */

(function () {
    angular
        .module("WebAppMaker")
        .config(Config);

    function Config($routeProvider) {
        $routeProvider
            .when("/",{
                templateUrl : "/assignment/views/home.html"
            })
            .when("/login", {
                templateUrl: "/assignment/views/user/login.view.client.html",
                controller: "LoginController",
                controllerAs: "model"
            })

            .when("/register",{
                templateUrl: "/assignment/views/user/register.view.client.html",
            })

            .when("/profile/:id",{
                templateUrl : "/assignment/views/user/profile.view.client.html",
                controller: "ProfileController",
                controllerAs: "model"
            })

            .otherwise({
                redirectTo: "/login"
            });
    };
})();

