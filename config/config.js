/*global angular */
require.config({
  shim: {
    'angular': {
      exports: 'angular'
    }
  },
  paths: {
    app: 'config/app',
    angular: 'lib/angular'
  },
  baseUrl: '/'
});

(function() {
  console.time('requirejs');
  require([
    // application
    'app',

    // dependencies
    'angular',

    // services
//    'js/services/database.js',
//    'js/services/dates.js',
//    'js/services/http-cache.js',
//    'js/services/shaking.js',

    // controllers
    'modules/index/IndexController.js',
    'modules/about/AboutController.js'
//    'js/controllers/category.js',
//    'js/controllers/food.js',
//    'js/controllers/orders.js'
    
  ], function() {
    console.timeEnd('requirejs');

    angular.bootstrap(document, ['app']);
  });

})();
