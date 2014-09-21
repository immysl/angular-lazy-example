/*global angular*/

(function () {
    'use strict';

    // Declare app level module which depends on filters, and services
    angular.module('app', ['oc.lazyLoad', 'ui.router']);

    angular.module('app').config(OcLazyLoadConfig);
    angular.module('app').config(RouterConfig);

    function OcLazyLoadConfig($ocLazyLoadProvider) {
        // We configure ocLazyLoad to use the lib script.js as the async loader
        $ocLazyLoadProvider.config({
            debug: true,
            events: true
        });
    }

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
                                'vendor/bootstrap/dist/css/bootstrap.css',
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

}());
