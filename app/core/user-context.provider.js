(function () {
    "use strict";

    angular
        .module("app")
        .service("userContext", userContext);

    userContext.$inject = [];

    function userContext() {
        var user = null;
        return {
            setUser: function (value) {
                user = value;
            },
            getUser: function () {
                return user;
            },
            isAuthenticated: function () {
                if (user !== null && user.name.length > 0) {
                    return true;
                }
                return false;
            }
        }
    }
})();