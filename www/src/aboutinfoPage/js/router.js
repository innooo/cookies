angular.module('aboutinfoRouter', [])
    .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
        $stateProvider
            .state('aboutinfo', {
                url: '/aboutinfo',
                views: {
                    '': {
                        templateUrl: 'template/aboutinfo.html',
                        controller: 'aboutinfo'
                    }
                }
            })
        $ionicConfigProvider.views.swipeBackEnabled(true);
    })