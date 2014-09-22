/* jshint camelcase:false */

(function(){
  'use strict';

  angular.module('ng-weather')
  .controller('WebcamsController', ['wu', '$scope', function(wu, $scope){
    $scope.title = 'Webcams';

    $scope.getWebcams = function(){
      wu.getWebcams($scope.zip).then(function(response){
        $scope.webcams = response.data.webcams;
      });
    };
  }]);
})();
