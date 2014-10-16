/* global define, require  */

(function () {

    'use strict';

    var dependencies = ['app'];

    define(dependencies, function (app) {

        app.config(LazyLoadConfig);
        app.config(ngDialogConfig);
        app.run(Authenticate);

        function LazyLoadConfig($ocLazyLoadProvider) {
            $ocLazyLoadProvider.config({
                debug: true,
                events: true,
                jsLoader: require,
                loadedModules: ['app']
            });
        }

        function ngDialogConfig(ngDialogProvider) {
            ngDialogProvider.setDefaults({
                showClose: false,
                closeByDocument: false,
                closeByEscape: false
            });
        }

        function Authenticate($rootScope, $state, AuthService) {
            $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                if (toState.authenticate && !AuthService.isAuthenticated()) {
                    $state.go('login');
                    event.preventDefault();
                } else if (toState.name === 'login' && AuthService.isAuthenticated()) {
                    $state.go(fromState.name);
                    event.preventDefault();
                }
            });
        }

    });

})();
