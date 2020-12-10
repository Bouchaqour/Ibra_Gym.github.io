var main = function(){
var app = angular.module('myApp', []);
app.controller('validateCtrl', function($scope) {



  $scope.change = function(checkValue) {
  if(checkValue==true){
        $scope.cname=$scope.first+" "+ $scope.last;
		$scope.caddress= $scope.address;
		$scope.czip= $scope.zip;
		$scope.cstate= $scope.state;
			$scope.ccity= $scope.city;
		}
		else{
		  $scope.cname="";
		$scope.caddress= "";
		$scope.czip= "";
		$scope.cstate="";
			$scope.ccity= "";
		}
      };
});

app.directive('validateEmail', function() {



  var EMAIL_REGEXP = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

  return {
    require: 'ngModel',
    restrict: '',
    link: function(scope, elm, attrs, ctrl) {
      // only apply the validator if ngModel is present and Angular has added the email validator
      if (ctrl && ctrl.$validators.email) {

        // this will overwrite the default Angular email validator
        ctrl.$validators.email = function(modelValue) {
          return ctrl.$isEmpty(modelValue) || EMAIL_REGEXP.test(modelValue);
        };
      }
    }
  };
});


};

$(document).ready(main);