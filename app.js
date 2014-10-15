/* global define, require, localStorage */

(function () {
    'use strict';

    var dependencies = ['angular',
                        'ui-router',
                        'oc-lazy-load',
                        'ng-dialog'];

    define(dependencies, function (angular) {

        angular.module('app', ['ui.router',
                               'oc.lazyLoad',
                               'ngDialog']);

        return angular.module('app');

    });

})();
