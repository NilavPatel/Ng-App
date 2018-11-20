(function () {
    'use strict';

    angular
        .module('app')
        .factory('httpInterceptor', ['$q', '$rootScope', '$log', function ($q, $rootScope, $log) {

            var numLoadings = 0;

            return {
                request: function (config) {
                    // check if html or js file is requested
                    if (config.url.indexOf(".html") != -1 || config.url.indexOf(".js") != -1) {
                        numLoadings++;
                        // Show loader
                        $rootScope.$broadcast("loader_show");
                    }

                    return config || $q.when(config)

                },
                response: function (response) {
                    // check if html or js file was requested
                    if (response.config.url.indexOf(".html") != -1 || response.config.url.indexOf(".js") != -1) {
                        if ((--numLoadings) === 0) {
                            // Hide loader
                            $rootScope.$broadcast("loader_hide");
                        }
                    }

                    return response || $q.when(response);

                },
                responseError: function (response) {
                    // check if html or js file was requested
                    if (response.config.url.indexOf(".html") != -1 || response.config.url.indexOf(".js") != -1) {
                        if ((--numLoadings) === 0) {
                            // Hide loader
                            $rootScope.$broadcast("loader_hide");
                        }
                    }

                    return $q.reject(response);
                }
            };
        }])
        .config(['$httpProvider', function ($httpProvider) {
            $httpProvider.interceptors.push('httpInterceptor');
        }]);
})();