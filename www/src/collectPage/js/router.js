angular.module('collectRouter', [])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('collect', {
                url: '/collect',
                templateUrl: 'template/collect.html',
                controller: 'collect'
            })
    })