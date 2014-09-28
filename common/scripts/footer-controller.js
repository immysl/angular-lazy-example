/*global define*/

(function () {

    'use strict';

    var dependencies = ['app'];

    define(dependencies, function (app) {
        app.controller('FooterCtrl', FooterCtrl);

        function FooterCtrl($sce) {
            var vm = this;

            vm.copyrightNotice = $sce.trustAsHtml('© 2014 Immysl. All rights not reserved.');
        }
    });

}());
