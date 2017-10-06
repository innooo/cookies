angular.module('articleRouter', [])
    .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
        $stateProvider
            .state('tabs.article', {
                url: '/article',
                views: {
                    'center-tabs': {
                        templateUrl: 'template/article.html',
                        controller: 'article'
                    }
                }
            })
        $ionicConfigProvider.views.swipeBackEnabled(true);
    })