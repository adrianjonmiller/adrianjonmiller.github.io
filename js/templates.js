'use strict';

angular.module("ajm.templates", []).

  run(['$templateCache', function($templateCache, $scope) {
  $templateCache.put("modal",
  	"<div id=\"modal-cover\"></div>" +
    "<div id=\"modal\" ng-include=\"modalUrl\">" +
    	"<span>{{ modalUrl }}</span>" +
    "</div>"
    );
  }]);