/* global define */

(function () {

    'use strict';

    var dependencies = ['app'];

    define(dependencies, function(app) {

        app.service('AuthService', AuthService);

        function AuthService() {
            var vm = this;

            vm.authenticated = false;
        }

        AuthService.prototype.updateAuthenticated = function (value) {
            var vm = this;

            vm.authenticated = value;
        };

        AuthService.prototype.isAuthenticated = function () {
            var vm = this;

            return vm.authenticated;
        };

    });

})();
