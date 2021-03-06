angular.module('app.controllers', [])

	.controller('designCtrl', function($scope, $rootScope, ModalService) {
		$scope.toPage = function(target) {
			$scope.currentPage = target;
		}

		$scope.toggleModal = function(target) {
			angular.element('body').addClass('no-scroll');

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
			angular.element('body').removeClass('no-scroll');
			close();
		}
	})

	.controller('headerCtrl', function($scope){
		$scope.toggleMenu = function() {
			angular.element('#mobile-menu').toggleClass('is-open');
			angular.element('body').toggleClass('no-scroll');
		}
	});
