/* global define */

(function () {

    'use strict';

    var dependencies = ['components/dashboard/dashboard'];

    define(dependencies, function (DashboardModule) {

        DashboardModule.controller('DashboardCtrl', DashboardCtrl);

        function DashboardCtrl($ocLazyLoad, ngDialog) {
            var vm = this;

            vm.changeShowHello = changeShowHello;
            vm.openModal = openModal;

            function changeShowHello() {
                if (vm.showHello) {
                    vm.showHello = false;
                } else {
                    vm.showHello = true;
                }
            }

            function openModal() {
                $ocLazyLoad.load({
                    name: 'app.modal',
                    files: ['components/modal/modal-controller']
                }).then(function () {
                    ngDialog.open({
                        template: 'components/modal/modal.html',
                        controller: 'ModalCtrl as modal'
                    });
                });
            }
        }

    });

})();
