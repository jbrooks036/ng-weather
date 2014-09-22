(function(){
  'use strict';

  angular.module('ng-weather')
  .factory('wu', ['$http', function($http){
    function getUrl(service, zip){
      return  'http://api.wunderground.com/api/afc90397a52d2b38/' + service + '/q/' + zip + '.json?callback=JSON_CALLBACK';
    }

    function getConditions(zip){
      var url = getUrl('conditions', zip);
      return $http.jsonp(url);
    }

    function getWebcams(zip){
      var url = getUrl('webcams', zip);
      return $http.jsonp(url);
    }

    return {getConditions:getConditions, getWebcams:getWebcams};

  }]);
})();
