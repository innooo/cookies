angular.module('accountRouter', [])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('account', {
                url: '/account',
                templateUrl: 'template/account.html',
                controller: 'account'
            })
    })