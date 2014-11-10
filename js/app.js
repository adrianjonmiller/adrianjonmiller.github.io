'use strict';

angular.module('ajm', [
  'ngRoute',
  'ui.router',
  'angularModalService',
  'ajm.controllers',
  'ajm.filters',
  'ajm.directives',
  'ajm.templates'
])

// configuring our routes 
// =============================================================================
.config(function($stateProvider, $urlRouterProvider) {
	
	$stateProvider
	
		// route to show our basic form (/form)
	.state('home', {
		// url: '/',
		// views: {
		// 	'': {
		// 		templateUrl: 'pages/home.html',
		// 		controller: 'home',
		// 	}
		// },	
		// data: {
		// 	name: 'Home',
		// 	slug: 'home'
		// }
	})
	$urlRouterProvider.otherwise('/');
});

// our controller for the form
// =============================================================================
