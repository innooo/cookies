angular.module('cartRouter', [])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('tabs.cart', {
                url: '/cart',
                views: {
                    'mall-tabs': {
                        templateUrl: 'template/cart.html',
                        controller: 'cart'
                    }
                }
            })
    })