/*global define*/

(function () {

    'use strict';

    var dependencies = ['components/dashboard/dashboard'];

    define(dependencies, function (DashboardModule) {

        DashboardModule.controller('DashboardCtrl', DashboardCtrl);

        function DashboardCtrl() {
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
