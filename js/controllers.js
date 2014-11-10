'use strict';

angular.module('ajm.controllers', [])
	.controller('appCtrl', function($scope, $rootScope, ModalService) {
		$scope.currentPage = "";

		$scope.toPage = function(target) {
			$scope.currentPage = target;
		}

		$scope.toggleModal = function(target) {
			if(target) {
				ModalService.showModal({
			  	templateUrl: target,
			  	controller: "modalCtrl"
			  });
			}
		}
	})
	.controller('modalCtrl', function($scope, close){
		$scope.closeModal = function() {
			close();
		}
	});