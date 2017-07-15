(function() {
  'use strict';

  angular.module('meetIrl', [
    'ui.router',
    'api.users',
    'component.users'
  ])
  .config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
  });
})();