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
                    templateUrl: 'app/shared/menu/menu.html'
                },
                'container': {
                    templateUrl: 'app/modules/home/dashboard/dashboard.html'
                }
            },
            resolvePolicy: { deps: { when: "EAGER", async: "WAIT" } },
            resolve: {
                parent: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'app/modules/home/dashboard/dashboard.module.js',
                        'app/modules/home/dashboard/dashboard.controller.js'
                    ]
                    );
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
                    templateUrl: 'app/shared/menu/menu.html'
                },
                'container': {
                    templateUrl: 'app/modules/home/contact-us/contact-us.html'

                }
            },
            resolvePolicy: { deps: { when: "EAGER", async: "WAIT" } },
            resolve: {
                parent: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'app/modules/home/contact-us/contact-us.module.js',
                        'app/modules/home/contact-us/contact-us.controller.js'
                    ]
                    );
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
                    templateUrl: 'app/shared/menu/menu.html'
                },
                'container': {
                    templateUrl: 'app/modules/home/about-us/about-us.html'

                }
            },
            resolvePolicy: { deps: { when: "EAGER", async: "WAIT" } },
            resolve: {
                parent: ['$ocLazyLoad', function ($ocLazyLoad) {

                    return $ocLazyLoad.load([
                        'app/modules/home/about-us/about-us.module.js',
                        'app/modules/home/about-us/about-us.controller.js'
                    ]

                    );
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