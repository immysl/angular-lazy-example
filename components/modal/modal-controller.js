/* global define */

(function () {

    'use strict';

    var dependencies = ['components/modal/modal'];

    define(dependencies, function (ModalModule) {

        ModalModule.controller('ModalCtrl', ModalCtrl);

        function ModalCtrl() {
            var vm = this;

            vm.title = 'ngDialog Modal';
            vm.message = 'This is a sample modal state using UI Router and ngDialog';

            vm.say = {};
            vm.sayIt = sayIt;

            function sayIt() {
                vm.say.show = true;
                vm.say.message = 'Say It Out Loud!';
            }
        }

    });

})();
