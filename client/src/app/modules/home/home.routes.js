(function () {
    "use strict";

    angular
        .module("app.home")
        .config(stateConfig);

    function stateConfig($stateProvider, $urlRouterProvider) {

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
            resolve: {
                parent: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'app.home.dashboard',
                        files: [
                            'app/modules/home/dashboard/dashboard.module.js',
                            'app/modules/home/dashboard/dashboard.controller.js'
                        ]
                    });
                }]
            }
        }

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
            resolve: {
                parent: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'app.home.contactus',
                        files: [
                            'app/modules/home/contact-us/contact-us.module.js',
                            'app/modules/home/contact-us/contact-us.controller.js'
                        ]
                    });
                }]
            }
        }

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
            resolve: {
                parent: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {

                    return $ocLazyLoad.load(
                        {
                            name: 'app.home.aboutus',
                            files: [
                                'app/modules/home/about-us/about-us.module.js',
                                'app/modules/home/about-us/about-us.controller.js'
                            ]
                        }
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