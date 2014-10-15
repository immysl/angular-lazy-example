/* global define, require, localStorage */

(function () {
    'use strict';

    var dependencies = ['angular', 'ui-router', 'oc-lazy-load'];

    define(dependencies, function (angular) {
        angular.module('app', ['ui.router', 'oc.lazyLoad']);

        return angular.module('app');

    });

})();
