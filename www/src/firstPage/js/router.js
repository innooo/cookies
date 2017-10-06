angular.module('firstRouter', [])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('tabs.first', {
                url: '/first',
                views: {
                    'home-tabs': {
                        templateUrl: 'template/first.html',
                        controller: 'first'
                    }
                }
            })
    })