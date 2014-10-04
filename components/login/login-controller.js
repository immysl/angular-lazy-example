/*global define, localStorage*/

(function () {

    'use strict';

    var dependencies = ['components/login/login',
                        'components/login/login-service'];

    define(dependencies, function (LoginModule) {
        LoginModule.controller('LoginCtrl', LoginCtrl);

        /* @ngInject */
        function LoginCtrl(LoginService, AuthService, $http, $state) {
            var vm = this,
                message;

            // scope methods
            vm.submitLogin = submitLogin;

            // scope variables
            vm.user = {};
            vm.user.showMessage = false;

            function submitLogin() {
                message = LoginService.checkCredentials(vm.user.username, vm.user.password);

                if (message === 'correct credentials') {
                    $state.go('dashboard');
                    AuthService.updateAuthenticated(true);
                } else {
                    vm.user.showMessage = true;
                    vm.user.loginMessage = message;
                }
            }
        }

    });

})();
