/* jshint camelcase:false */

(function(){
  'use strict';

  angular.module('ng-weather')
  .controller('ConditionsController', ['$http', '$scope', function($http, $scope){
    $scope.title = 'Current Conditions';

    $scope.getConditions = function(){
      var url =  'http://api.wunderground.com/weather/api/afc90397a52d2b38/conditions/q/' + $scope.zip + '.json?callback=JSON_CALLBACK';
      $http.jsonp(url).then(function(response){
        $scope.temperature = response.data.current_observation.temp_f;
        $scope.icon = response.data.current_observation.icon_url;
        $scope.relHumidity = response.data.current_observation.relative_humidity;
        debugger;
        console.log(response);
      });
    };
  }]);
})();
