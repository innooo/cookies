var tabsControllers = {
    home: function($scope) {
        $scope.str = 'home';
    },
    mall: function($scope) {
        $scope.str = 'mall';
    },
    center: function($scope, $ionicSlideBoxDelegate) {


        $scope.str = 'center';
        $scope.tabNames = ['关注', '精品', '圈子'];
        $scope.slectIndex = 0;
        $scope.activeSlide = function(index) { //点击时候触发
            $scope.slectIndex = index;
            $ionicSlideBoxDelegate.slide(index);
        };
        $scope.slideChanged = function(index) { //滑动时候触发
            $scope.slectIndex = index;
        };
        $scope.pages = ["template/tab01.html", "template/tab02.html", "template/tab03.html"];

        // 侧边栏动画
        $scope.togglemenu = function() {
            var fixedmenu = document.getElementsByClassName('fixedMenu')[0];
            var subMenu = document.getElementsByClassName('subMenu');
            var len = subMenu.length;
            var isActive = fixedmenu.className == 'fixedMenu activated' ? false : true;
            console.log($scope.toggle);
            switch ($scope.toggle) {
                case true:
                    $scope.menu = 'out';
                    $scope.submenu = 'out';
                    break;
                case false:
                    $scope.menu = 'in';
                    $scope.submenu = 'in';
            }
        };
    }
}
module.exports = tabsControllers;