angular.module('settingRouter', [])
    .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
        $stateProvider
            .state('setting', {
                url: '/setting',
                views: {
                    '': {
                        templateUrl: 'template/setting.html',
                        controller: 'setting'
                    }
                }
            })
        $ionicConfigProvider.views.swipeBackEnabled(true);
    })