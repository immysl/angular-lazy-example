/*global define*/

(function () {

    'use strict';

    var dependencies = ['app'];

    define(dependencies, function (app) {
        app.controller('MainCtrl', MainCtrl);
        app.controller('ChildCtrl', ChildCtrl);

        function MainCtrl() {
            var vm = this;

            vm.pageTitle = 'Angular Lazyload App';
            vm.authenticated = true;
            vm.hello = 'hello';
        }

        MainCtrl.prototype.sayHello = function () {
            this.hello = 'Hello mate, are you alright?';
        };


        function ChildCtrl() {
            var vm = this;
        }

        ChildCtrl.prototype = Object.create(MainCtrl.prototype);

        ChildCtrl.prototype.say = function () {
            var vm = this;
        };
    });

})();
