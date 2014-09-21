/*global angular, console*/

(function () {

    angular.module('app').controller('MainCtrl', MainCtrl);

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

}());
