/*global define, require, localStorage*/

(function () {
    'use strict';

    var dependencies = ['angular', 'ui-router', 'oc-lazy-load'];

    define(dependencies, function (angular) {
        angular.module('app', ['ui.router', 'oc.lazyLoad']);

        angular.module('app').config(RouterConfig);
        angular.module('app').config(LazyLoadConfig);

        angular.module('app').run(Authenticate);

        function RouterConfig($stateProvider, $urlRouterProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise('/404');

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
                                files: ['components/login/login-controller']
                            });
                        }
                    ]
                }
            }).state('dashboard', {
                url: '/dashboard',
                controller: 'DashboardCtrl as dashboard',
                templateUrl: 'components/dashboard/dashboard.html',
                authenticate: true,
                resolve: {
                    main: ['$ocLazyLoad',
                        function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'app.dashboard',
                                files: ['components/dashboard/dashboard-controller']
                            });
                        }
                    ]
                }
            }).state('story', {
                url: '/story',
                controller: 'StoryCtrl as story',
                templateUrl: 'components/story/story.html',
                authenticate: true,
                resolve: {
                    main: ['$ocLazyLoad',
                        function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'app.story',
                                files: ['components/story/story-controller']
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

        function Authenticate($rootScope, $state, AuthService) {
            $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                if (toState.authenticate && !AuthService.isAuthenticated()) {
                    $state.go('login');
                    event.preventDefault();
                } else if (toState.name === 'login' && AuthService.isAuthenticated()) {
                    $state.go(fromState.name);
                    event.preventDefault();
                }
            });
        }

        return angular.module('app');

    });

})();
