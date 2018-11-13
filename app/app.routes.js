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
                    templateUrl: 'modules/login/login.html'
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
                    templateUrl: 'modules/home/home.html'
                }
            },
            resolve: {
                parent: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'common/menu/menu.module.js',
                            'common/menu/menu.controller.js'
                        ]
                    });
                }]
            }
        }

        var error404 = {
            name: "error404",
            url: "/404",
            authenticate: false,
            views: {
                "main": {
                    templateUrl: 'common/error/404.html'
                }
            },
        }

        $stateProvider
            .state(login)
            .state(home)
            .state(error404);

        $urlRouterProvider.otherwise("login");

        $urlRouterProvider.when('', '/login');
    }
})();