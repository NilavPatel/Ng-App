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
            views: {
                "main": {
                    controller: 'LoginController',
                    templateUrl: 'app/modules/login/login.html'
                }
            }
        }

        var home = {
            name: "home",
            url: "/home",
            authenticate: true,
            views: {
                "main": {
                    controller: 'HomeController',
                    templateUrl: 'app/modules/home/home.html'
                }
            },
            resolve: {
                parent: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'app/shared/menu/menu.module.js',
                        'app/shared/menu/menu.controller.js'
                    ]);
                }]
            }
        }

        var error404 = {
            name: "error404",
            url: "/404",
            authenticate: false,
            views: {
                "main": {
                    templateUrl: 'app/shared/error/404.html'
                }
            },
        }

        $stateProvider
            .state(login)
            .state(home)
            .state(error404);

        $urlRouterProvider.otherwise("404");

        $urlRouterProvider.when('', '/login');
    }
})();