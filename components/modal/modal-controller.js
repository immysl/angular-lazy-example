/* global define */

(function () {

    'use strict';

    var dependencies = ['components/modal/modal'];

    define(dependencies, function (ModalModule) {

        ModalModule.controller('ModalCtrl', ModalCtrl);

        function ModalCtrl($state) {
            var vm = this;

            vm.title = 'ngDialog Modal';
            vm.message = 'This is a sample modal state using UI Router and ngDialog';

            vm.say = {};
            vm.sayIt = sayIt;
            vm.cancel = cancel;

            function sayIt() {
                vm.say.show = true;
                vm.say.message = 'Say It Out Loud!';
            }

            function cancel(closeThisDialog) {
                $state.go('dashboard');
                closeThisDialog();
            }
        }

    });

})();
