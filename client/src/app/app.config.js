(function () {
    "use strict";

    angular
        .module("app")
        .config(configure);

    configure.$inject = ['$logProvider', '$compileProvider', '__env', '$locationProvider'];

    function configure($logProvider, $compileProvider, __env, $locationProvider) {
        // for production environment set false
        $logProvider.debugEnabled(__env.enableDebug);
        // for production environment set false
        $compileProvider.debugInfoEnabled(__env.enableCompile);

        $locationProvider.html5Mode(false).hashPrefix('');
    }
})();