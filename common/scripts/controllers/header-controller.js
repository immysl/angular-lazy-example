/*global define*/

(function () {

    'use strict';

    var dependencies = ['app'];

    define(dependencies, function (app) {
        app.controller('HeaderCtrl', HeaderCtrl);

        function HeaderCtrl($http) {
            var vm = this;

            vm.title = 'Angular Lazyload App';
            vm.leadText = 'This is a small example app used to demonstrate how to lazyload ' +
                'angular modules by dynamically injecting them to the app.';

            $http.get('json/nav-links.json').success(function (response) {
                vm.navLinks = response;
            });
        }
    });

})();
