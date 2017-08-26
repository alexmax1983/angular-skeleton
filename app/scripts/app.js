'use strict';

/**
 * @ngdoc overview
 * @name productListApp
 * @description
 * # productListApp
 *
 * Main module of the application.
 */
angular
  .module('productListApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/route-one', {
        templateUrl: 'views/route-one.html',
        controller: 'RouteOneCtrl',
        controllerAs: 'routeOne'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
