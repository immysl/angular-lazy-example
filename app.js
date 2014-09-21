/*global define, require*/

(function () {
    'use strict';

    var dependencies = ['angular', 'ui-router', 'oc-lazy-load'];

    define(dependencies, function (angular) {
        angular.module('app', ['ui.router', 'oc.lazyLoad']);

        angular.module('app').config(RouterConfig);
        angular.module('app').config(LazyLoadConfig);

        function RouterConfig($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/404');

            // You can also load via resolve
            $stateProvider.state('login', {
                url: '/login',
                controller: 'LoginCtrl as login',
                templateUrl: 'components/login/login.html',
                resolve: {
                    login: ['$ocLazyLoad',
                        function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'app.login',
                                files: ['components/login/login-controller']
                            });
                        }
                    ]
                }
            }).state('home', {
                url: '/home',
                controller: 'MainCtrl as main',
                templateUrl: 'common/views/main.html',
                resolve: {
                    main: ['$ocLazyLoad',
                        function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'app',
                                files: ['common/scripts/main-controller']
                            });
                        }
                    ]
                }
            }).state('404', {
                url: '/404',
                templateUrl: 'common/views/404.html'
            });
        }

        function LazyLoadConfig($ocLazyLoadProvider) {
            $ocLazyLoadProvider.config({
                debug: true,
                events: true,
                jsLoader: require,
                loadedModules: ['app']
            });
        }

        return angular.module('app');

    });

}());
