'use strict';
/*jshint node:true, quotmark:false*/
/*global angular,alert*/
angular.module('marioApp')
	.controller('marioCtrl', ['$scope', '$http', '$rootScope', '$state', 
		function($scope, $http, $rootScope, $state) {

		// $scope.logout = function() {
		// 	Auth.logout().then(function(isLoggedOut) {
		// 		if (isLoggedOut) {
		// 			$state.go('login');
		// 		}
		// 	}, function(err) {
		// 		console.log(err);
		// 	});
		// };


	}]);