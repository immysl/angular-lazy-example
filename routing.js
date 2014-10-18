/* global define, require  */

(function () {

    'use strict';

    var dependencies = ['app'];

    define(dependencies, function (app) {

        app.config(RouterConfig);

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
                    dashboard: ['$ocLazyLoad',
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
                    story: ['$ocLazyLoad',
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
            }).state('modal', {
                parent: 'dashboard',
                authenticate: true,
                resolve: {
                    loadModal: ['$ocLazyLoad', '$injector', '$rootScope',
                        function ($ocLazyLoad, $injector, $rootScope) {
                            return $ocLazyLoad.load({
                                name: 'app.modal',
                                files: ['components/modal/modal-controller']
                            }).then(function () {
                                $rootScope.bootstrapLoaded = true;

                                $injector.get('ngDialog').open({
                                    template: 'components/modal/modal.html',
                                    controller: 'ModalCtrl as modal'
                                });
                            });
                        }
                    ]
                }
            });
        }

    });

})();
