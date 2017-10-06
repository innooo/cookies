angular.module('cartRouter', [])
    .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
        $stateProvider
            .state('cart', {
                url: '/cart',
                views: {
                    '': {
                        templateUrl: 'template/cart.html',
                        controller: 'cart'
                    }
                }
            })
        $ionicConfigProvider.views.swipeBackEnabled(true);
    })