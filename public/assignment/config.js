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

            .when("/user/:id",{
                templateUrl : "/assignment/views/user/profile.view.client.html",
                controller: "ProfileController",
                controllerAs: "model"
            })

            .when("/user/:userId/website", {
            templateUrl : "/assignment/views/website/website-list.view.client.html",
            controller: "WebsiteListController",
            controllerAs: "model"
            })

            .when("/user/:userId/website/new", {
                templateUrl : "/assignment/views/website/website-new.view.client.html",
                controller: "NewWebsiteController",
                controllerAs: "model"
            })

            .when("/user/:userId/website/:wid", {
                templateUrl : "/assignment/views/website/website-edit.view.client.html"
            })



            .otherwise({
                redirectTo: "/login"
            });
    };
})();

