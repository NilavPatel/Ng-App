(function () {
    "use strict";

    angular
        .module("app.home")
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function stateConfig($stateProvider, $urlRouterProvider) {

        // dashboard state
        var dahsboard = {
            name: "home.dashboard",
            url: "/dashboard",
            authenticate: true,
            views: {
                'menu': {
                    controller: 'MenuController',
                    templateUrl: 'common/menu/menu.html'
                },
                'container': {
                    controller: 'DashboardController',
                    templateUrl: 'modules/dashboard/dashboard.html'
                }
            },
            resolve: {
                dahsboard: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'modules/dashboard/dashboard.module.js',
                            'modules/dashboard/dashboard.controller.js'
                        ]
                    });
                }]
            }
        }

        // contact us state
        var contactus = {
            name: "home.contactus",
            url: "/contactus",
            authenticate: true,
            views: {
                'menu': {
                    controller: 'MenuController',
                    templateUrl: 'common/menu/menu.html'
                },
                'container': {
                    controller: 'ContactUsController',
                    templateUrl: 'modules/contact-us/contact-us.html'
                }
            },
            resolve: {
                contactus: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'modules/contact-us/contact-us.module.js',
                            'modules/contact-us/contact-us.controller.js'
                        ]
                    });
                }]
            }
        }

        // about us state
        var aboutus = {
            name: "home.aboutus",
            url: "/aboutus",
            authenticate: true,
            views: {
                'menu': {
                    controller: 'MenuController',
                    templateUrl: 'common/menu/menu.html'
                },
                'container': {
                    controller: 'AboutUsController',
                    templateUrl: 'modules/about-us/about-us.html'
                }
            },
            resolve: {
                aboutus: ['$ocLazyLoad', function ($ocLazyLoad) {

                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'modules/about-us/about-us.module.js',
                            'modules/about-us/about-us.controller.js'
                        ]
                    });
                }]
            }
        }

        $stateProvider
            .state(dahsboard)
            .state(contactus)
            .state(aboutus);

        $urlRouterProvider.when('', '/dashboard');
    }
})();