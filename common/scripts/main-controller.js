/*global define*/

(function () {

    'use strict';

    var dependencies = ['app'];

    define(dependencies, function (angular, app) {
        app.controller('MainCtrl', MainCtrl);

        function MainCtrl($ocLazyLoad, $timeout) {
            var vm = this;

            vm.changeShowHello = changeShowHello;

            function changeShowHello() {
                if (vm.showHello) {
                    vm.showHello = false;
                } else {
                    vm.showHello = true;
                }
            }
        }
    });

}());
