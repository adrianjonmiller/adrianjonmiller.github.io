'use strict';

angular.module('ajm.directives', [])
  .directive('uiModal', function($http, $templateCache, $compile) {

  	var linker = function (scope, element, attrs) {
  		console.log(scope);
      $http.get('modal', {cache: $templateCache}).success(function(tplContent){
         element.replaceWith($compile(tplContent.trim())(scope));
      });
    }

    return {
    	scope: {
    		modalUrl: "="
    	},
      link: linker
    }
  });