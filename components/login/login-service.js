/* global define */

(function () {

    'use strict';

    var dependencies = ['components/login/login'];

    define(dependencies, function (LoginModule) {
        LoginModule.service('LoginService', LoginService);

        function LoginService() {
            var vm = this;

            vm.checkCredentials = checkCredentials;

            function checkCredentials(username, password) {
                var message = '';

                if (username && password) {
                    if (username === 'hello') {
                        if (password === 'hello_pass') {
                            message = 'correct credentials';
                        } else {
                            message = 'wrong password';
                        }
                    } else {
                        message = 'wrong username';
                    }
                } else {
                    message = 'enter credentials';
                }

                return message;
            }
        }

    });

})();
