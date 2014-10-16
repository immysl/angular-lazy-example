/* global define */

(function () {

    'use strict';

    var dependencies = ['app'];

    define(dependencies, function (app) {
        app.controller('HeaderCtrl', HeaderCtrl);

        function HeaderCtrl($http) {
            var vm = this;

            vm.title = 'Angular Lazyload App';
            vm.leadText = 'An example app lazy loading ' +
                'angular modules. Login to access ' +
                'the other three states. (username: hello, password: hello_pass)';

            $http.get('json/nav-links.json').success(function (response) {
                vm.navLinks = response;
            });
        }
    });

})();
