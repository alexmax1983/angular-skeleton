'use strict';

/**
 * @ngdoc directive
 * @name productListApp.directive:playYoutube
 * @description
 * # playYoutube
 */
angular.module('productListApp')
  .directive('playYoutube', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the playYoutube directive');
      }
    };
  });
