/*global define*/

(function () {

    'use strict';

    var dependencies = ['components/login/login',
                        'components/login/login-service'];

    define(dependencies, function (LoginModule) {
        LoginModule.controller('LoginCtrl', LoginCtrl);

        function LoginCtrl($http, LoginService) {
            var vm = this;

            vm.submitLogin = submitLogin;

            vm.user = {};
            vm.user.showMessage = false;

            function submitLogin() {
                vm.user.showMessage = true;
                vm.user.loginMessage = LoginService.checkCredentials(vm.user.username, vm.user.password);
            }
        }

    });

}());
