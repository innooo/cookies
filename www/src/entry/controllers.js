var tabsControllers = require('./tabsController.js');
var firstCtrl = require('./../firstPage/js/controller.js');
var tab01Ctrl = require('./../tab01Page/js/controller.js');
var profileCtrl = require('./../profilePage/js/controller.js');
var collectCtrl = require('./../collectPage/js/controller.js');
var accountCtrl = require('./../accountPage/js/controller.js');
var cartCtrl = require('./../cartPage/js/controller.js');
var goodsDetailsCtrl = require('./../goodsDetailsPage/js/controller.js');
var aboutinfoCtrl = require('./../aboutinfoPage/js/controller.js');
var settingCtrl = require('./../settingPage/js/controller.js');
var articleCtrl = require('./../articlePage/js/controller.js');




angular.module('controllers', [])
    .controller('sidemenu', function($scope) {
        $scope.toggleLeft = function() {
            $ionicSideMenuDelegate.toggleLeft();
        };
    })
    .controller('home', tabsControllers.home)
    .controller('mall', tabsControllers.mall)
    .controller('center', tabsControllers.center)
    .controller('first', firstCtrl)
    .controller('tab01', tab01Ctrl)
    .controller('profile', profileCtrl)
    .controller('collect', collectCtrl)
    .controller('account', accountCtrl)
    .controller('cart', cartCtrl)
    .controller('goodsDetails', goodsDetailsCtrl)
    .controller('aboutinfo', aboutinfoCtrl)
    .controller('setting', settingCtrl)
    .controller('article', articleCtrl)