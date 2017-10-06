module.exports = function($scope, $location, $state) {
    $scope.$on('$ionicView.beforeEnter', function(event, viewData) {
        viewData.enableBack = true;
    });
    $scope.goBack = function() {
        // $ionicNavBarDelegate.back();
        history.go(-1);
        // $state.go('tabs.home'); 跳转到某个视图状态
    };
    $scope.onSwipeLeft = function() {
        history.go(-1);
    };
};


// function($scope) {
//     $scope.goBack = function() {
//         $ionicNavBarDelegate.back();
//     };
// };