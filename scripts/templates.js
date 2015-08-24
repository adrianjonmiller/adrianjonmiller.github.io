'use strict';

angular.module("app.templates", []).

  run(['$templateCache', function($templateCache, $scope) {
  $templateCache.put("modal",
  	"<div id=\"modal-cover\"></div>" +
    "<div id=\"modal\" ng-include=\"modalUrl\">" +
    	"<span>{{ modalUrl }}</span>" +
    "</div>"
    );
  }]);