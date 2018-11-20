(function () {
    'use strict';

    angular
        .module('app')
        .directive("loader", ['$rootScope', function ($rootScope) {
            return {
                template: '<div layout="row" layout-sm="column" layout-align="space-around" class="loader-image">' +
                    '   <md-progress-circular ng-disabled="!isLoaderShow" class="md-hue-2" md-diameter="40px">' +
                    '   </md-progress-circular>' +
                    '</div>',
                link: function ($scope, element, attrs) {
                    $scope.$on("loader_show", function () {
                        return $rootScope.isLoaderShow = true;
                    });
                    return $scope.$on("loader_hide", function () {
                        return $rootScope.isLoaderShow = false;
                    });
                }
            };

        }]
        )
})();