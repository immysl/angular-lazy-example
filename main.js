/*global require, document*/

(function () {
    'use strict';

    require.config({
        waitSeconds: 100,
        paths: {
            'angular': 'vendor/angular/angular',
            'ui-router': 'vendor/angular-ui-router/release/angular-ui-router',
            'oc-lazy-load': 'vendor/oclazyload/dist/ocLazyLoad',
            'ui-router-extras': 'vendor/ui-router-extras/release/ct-ui-router-extras',
            'app': 'app'
        },
        shim: {
            'angular': {
                'exports': 'angular'
            },
            'ui-router': {
                deps: ['angular']
            },
            'oc-lazy-load': {
                deps: ['angular']
            },
            'ui-router-extras': {
                deps: ['ui-router']
            },
            'app': ['angular']
        }
    });

    var dependencies = ['angular', 'app'];

    require(dependencies, function (angular) {
        angular.element(document).ready(function () {
            angular.bootstrap(document, ['app']);
        });
    });

}());
