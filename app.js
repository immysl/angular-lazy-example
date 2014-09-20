/*global define, require*/

(function () {
    'use strict';

    var dependencies = ['angular', 'ui-router', 'ui-router-extras', 'oc-lazy-load'];

    define(dependencies, function (angular) {
        angular.module('app', ['ui.router', 'ui-router-extras', 'oc.lazyLoad']);

        angular.module('app').config(RouterConfig);
        angular.module('app').config(LazyLoadConfig);

        function RouterConfig($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');

            // You can also load via resolve
            $stateProvider.state('login', {
                url: '/',
                controller: 'LoginCtrl as login',
                templateUrl: 'components/login/login.html',
                resolve: {
                    login: ['$ocLazyLoad',
                        function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'app.login',
                                files: [
                                    'components/login/login.js',
                                    'components/login/login-controller.js'
                                ]
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
                                files: ['common/scripts/main-controller.js']
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
            // We configure ocLazyLoad to use the lib script.js as the async loader
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
