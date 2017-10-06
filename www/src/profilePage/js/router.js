angular.module('profileRouter', [])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('profile', {
                url: '/profile',
                templateUrl: 'template/profile.html',
                controller: 'profile'
            })
    })