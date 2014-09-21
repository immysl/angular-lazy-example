/*global define*/

(function () {

    'use strict';

    var dependencies = ['components/login/login'];

    define(dependencies, function (login) {
        login.controller('LoginCtrl', LoginCtrl);

        function LoginCtrl() {
            var vm = this;

            vm.submitLogin = submitLogin;

            vm.user = {};
            vm.user.showMessage = false;

            function submitLogin() {
                vm.user.showMessage = true;

                if (vm.user.username && vm.user.password) {
                    if (vm.user.username === 'hello') {
                        if (vm.user.password === 'hello_pass') {
                            vm.user.loginMessage = 'correct credentials';
                        } else {
                            vm.user.loginMessage = 'wrong password';
                        }
                    } else {
                        vm.user.loginMessage = 'wrong username';
                    }
                } else {
                    vm.user.loginMessage = 'enter credentials';
                }
            }
        }

    });

}());
