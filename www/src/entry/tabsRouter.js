angular.module('tabsRouter', [])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('tabs', {
            url: '/tabs',
            templateUrl: 'template/tabs.html'
        }).state('tabs.home', {
            url: '/home',
            views: {
                'home-tabs': {
                    templateUrl: 'template/home.html',
                    controller: 'home'
                }
            }
        }).state('tabs.mall', {
            url: '/mall',
            views: {
                'mall-tabs': {
                    templateUrl: 'template/mall.html',
                    controller: 'mall'
                }
            }
        }).state('tabs.center', {
            url: '/center',
            views: {
                'center-tabs': {
                    templateUrl: 'template/center.html',
                    controller: 'center'
                }
            }
        })
        $urlRouterProvider.otherwise('tabs/home');
    }])