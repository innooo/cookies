angular.module('goodsDetailsRouter', [])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('cart.goodsDetails', {
                url: '/goodsDetails',
                templateUrl: 'template/goodsDetails.html',
                controller: 'goodsDetails'
            })
    })