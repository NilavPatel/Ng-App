(function () {
    "use strict";

    angular
        .module("app.home")
        .config(stateConfig);

    function stateConfig($stateProvider, $urlRouterProvider) {

        // dashboard state
        var dahsboard = {
            name: "home.dashboard",
            url: "/dashboard",
            authenticate: true,
            active: "home.dashboard",
            views: {
                'menu': {
                    controller: 'MenuController',
                    templateUrl: 'shared/menu/menu.html'
                },
                'container': {
                    controller: 'DashboardController',
                    templateUrl: 'modules/home/dashboard/dashboard.html'
                }
            },
            resolve: {
                dahsboard: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'modules/home/dashboard/dashboard.module.js',
                            'modules/home/dashboard/dashboard.controller.js'
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
            active: "home.contactus",
            views: {
                'menu': {
                    controller: 'MenuController',
                    templateUrl: 'shared/menu/menu.html'
                },
                'container': {
                    controller: 'ContactUsController',
                    templateUrl: 'modules/home/contact-us/contact-us.html'
                }
            },
            resolve: {
                contactus: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'modules/home/contact-us/contact-us.module.js',
                            'modules/home/contact-us/contact-us.controller.js'
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
            active: "home.aboutus",
            views: {
                'menu': {
                    controller: 'MenuController',
                    templateUrl: 'shared/menu/menu.html'
                },
                'container': {
                    controller: 'AboutUsController',
                    templateUrl: 'modules/home/about-us/about-us.html'
                }
            },
            resolve: {
                aboutus: ['$ocLazyLoad', function ($ocLazyLoad) {

                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'modules/home/about-us/about-us.module.js',
                            'modules/home/about-us/about-us.controller.js'
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