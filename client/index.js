(function(){
  'use strict';

  angular.module('ng-weather', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/conditions', {templateUrl:'/views/conditions/conditions.html', controller:'ConditionsController'})
    .when('/webcams', {templateUrl:'/views/webcams/webcams.html', controller:'WebcamsController'})
    .otherwise({redirectTo:'/conditions'});
  }])
  .controller('MainController', ['$scope', function($scope){
  }]);
})();

