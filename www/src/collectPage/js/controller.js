module.exports = function($scope, $location, $state) {
    // 用于显示返回按钮
    $scope.$on('$ionicView.beforeEnter', function(event, viewData) {
        viewData.enableBack = true;
    });
    //用于实现返回按钮功能
    $scope.goBack = function() {
        // $ionicNavBarDelegate.back();
        history.go(-1);
        // $state.go('tabs.home'); 跳转到某个视图状态
    };
};


// function($scope) {
//     $scope.goBack = function() {
//         $ionicNavBarDelegate.back();
//     };
// };