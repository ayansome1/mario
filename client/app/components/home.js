'use strict';
/*jshint node:true, quotmark:false*/
/*global angular,alert,_,moment*/
angular.module('marioApp')
	.controller('homeCtrl', ['$scope', '$rootScope','$interval','$window', function($scope,$rootScope,$interval, $window) {

		let data;
		let numberOfSteps = 0;

		$scope.arr = [];
		$scope.marioX = 0;
		$scope.marioY = 0;
		$scope.generateGrid = (rows,columns) => {



			console.log(rows," ",columns);


			for(let x = 0; x < rows; x++){
			    $scope.arr[x] = [];    
			    for(let y = 0; y < columns; y++){ 
			        $scope.arr[x][y] = Math.floor(Math.random() * 3) + 1   
			    }    
			}

		}

		$scope.isFood = (n) => {
			if(n%3 === 0) {
				return true;
			}
			else{
				return false;
			}
		};

		let direction = 'R';

		$scope.key = function($event){
		    console.log($event.keyCode);
		    if ($event.keyCode == 38){

		        // console.log("up arrow");
		        direction = 'U';
		        numberOfSteps++;

		    }
		    else if ($event.keyCode == 39){
		        direction = 'R';
		        numberOfSteps++;


		        // console.log("right arrow");
		    }
		    else if ($event.keyCode == 40){
		        direction = 'D';

		        numberOfSteps++;

		        // console.log("down arrow");
		    }
		    else if ($event.keyCode == 37){
		        direction = 'L';
		        numberOfSteps++;


		        // console.log("left arrow");
		    }
		}

		function isGameOver() {

			let isOver = true;
			for(let x = 0; x < $scope.rows; x++){
			    // $scope.arr[x] = [];    
			    for(let y = 0; y < $scope.columns; y++){ 
			    	if($scope.arr[x][y] === 3) {
						isOver = false;
						return isOver;
					}
			        // $scope.arr[x][y] = Math.floor(Math.random() * 3) + 1   
			    }    
			}
			return isOver;
		}

		function moveAndcheckStatus(){
			// console.log($scope.marioX," ",$scope.marioY," ",$scope.arr[$scope.marioX][$scope.marioY]);
			
			// console.log($scope.columns);

			if(direction === 'R'){
				if($scope.marioY === $scope.columns - 1){
					$scope.marioY = $scope.marioY - 1;
					direction = 'L';
				}
				else{
					$scope.marioY = $scope.marioY + 1;
				}
			}
			else if (direction === 'L') {
				if($scope.marioY === 0){
					$scope.marioY = $scope.marioY + 1;
					direction = 'R';
				}
				else{
					$scope.marioY = $scope.marioY - 1;
				}
			}
			else if (direction === 'U') {

				if($scope.marioX === 0){
					$scope.marioX =$scope.marioX + 1;
					direction = 'D';
				}
				else{
					$scope.marioX = $scope.marioX - 1;
				}

				
			}
			else if (direction === 'D') {

				if($scope.marioX === $scope.rows - 1){
					$scope.marioX = $scope.marioX - 1;
					direction = 'U';
				}
				else{
					$scope.marioX = $scope.marioX + 1;
				}
				
			}


			for(let x = 0; x < $scope.rows; x++){
			    for(let y = 0; y < $scope.columns; y++){ 
			    	if($scope.arr[x][y] === 3 && $scope.marioX === x && $scope.marioY === y) {
						$scope.arr[x][y] = 2;
					}
			    }    
			}
			if(isGameOver()) {
				console.log("Game over");
				$window.alert("Game over...You took " + numberOfSteps + " key presses" );

			}

		}

		$scope.startGame = () => {
			$interval(function(){ 
					if(!isGameOver()){
					moveAndcheckStatus(); 

					}
				}, 1000);
		}

		// $scope.isMarioPos = () => {

		// }




	}]);