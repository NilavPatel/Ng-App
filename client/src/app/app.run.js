(function () {
    "use strict";

    angular
        .module("app")
        .run(runBlock);

    runBlock.$inject = ['$rootScope', '$state', 'userContext'];

    function runBlock(rootScope, state, userContext) {
        rootScope.$on('$stateChangeStart', function (event, toState) {

            if (toState.authenticate && !userContext.isAuthenticated()) {
                // User isn’t authenticated
                state.transitionTo("login");
                event.preventDefault();
            }
        });
    }
})();