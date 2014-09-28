/*global require, document*/

(function () {
    'use strict';

    require.config({
        waitSeconds: 100,
        paths: {
            'angular': 'vendor/angular/angular',
            'ui-router': 'vendor/angular-ui-router/release/angular-ui-router',
            'oc-lazy-load': 'vendor/oclazyload/dist/ocLazyLoad',
            'app': 'app'
        },
        shim: {
            'angular': {
                'exports': 'angular'
            },
            'ui-router': ['angular'],
            'oc-lazy-load': ['angular'],
            'app': ['angular']
        }
    });

    var dependencies = ['angular',
                        'app',
                        'common/scripts/main-controller',
                        'common/scripts/header-controller',
                        'common/scripts/footer-controller'];

    require(dependencies, function (angular) {
        angular.element(document).ready(function () {
            angular.bootstrap(document, ['app']);
        });
    });

}());
