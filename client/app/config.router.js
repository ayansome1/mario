'use strict';
/*global angular,noty, console*/

angular.module('marioApp')

.run(['$rootScope', '$state', '$stateParams', '$location', '$localStorage',
 function($rootScope, $state, $stateParams, $location, $localStorage) {


	

}])



.config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
	function($stateProvider, $urlRouterProvider, $httpProvider) {



		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'components/home.html',
			})
			/*.state('app', {
				abstract: true,
				templateUrl: 'components/common/layout.html'
			})
			.state('app.home', {
				url: '/',
				templateUrl: 'components/home/home.html',
			})*/;

	}
])

;