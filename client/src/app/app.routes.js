(function () {
    "use strict";

    angular
        .module("app")
        .config(stateConfig);

    function stateConfig($stateProvider, $urlRouterProvider) {

        var login = {
            name: "login",
            url: "/login",
            authenticate: false,
            templateUrl: "app/modules/login/login.html"
        }

        var home = {
            name: "home",
            url: "/home",
            authenticate: true,
            templateUrl: "app/modules/home/home.html",
            resolve: {
                parent: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'app.menu',
                        files: [
                            'app/shared/menu/menu.module.js',
                            'app/shared/menu/menu.controller.js'
                        ]
                    });
                }]
            }
        }

        var error404 = {
            name: "error404",
            url: "/404",
            authenticate: false,
            templateUrl: "app/shared/error/404.html"
        }

        $stateProvider
            .state(login)
            .state(home)
            .state(error404);

        $urlRouterProvider.otherwise("404");

        $urlRouterProvider.when('', '/login');
    }
})();