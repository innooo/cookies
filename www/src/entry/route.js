require('./tabsRouter.js');
require('./../firstPage/js/router.js');
require('./../profilePage/js/router.js');
require('./../collectPage/js/router.js');
require('./../accountPage/js/router.js');
require('./../cartPage/js/router.js');
require('./../goodsDetailsPage/js/router.js');
require('./../aboutinfoPage/js/router.js');
require('./../settingPage/js/router.js');
require('./../articlePage/js/router.js');


angular.module('route', ['tabsRouter',
    'firstRouter',
    'profileRouter',
    'collectRouter',
    'accountRouter',
    'cartRouter',
    'goodsDetailsRouter',
    'aboutinfoRouter',
    'settingRouter',
    'articleRouter'
]);